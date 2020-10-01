from flask import Blueprint, jsonify, request
from sqlalchemy import text
import urllib
from bs4 import BeautifulSoup
from difflib import SequenceMatcher

from app.models import db
from app.models.wines import Wine
from app.models.follows import Follow
from .wine_queries import pairing_wine_form_sql, rose_wine_form_sql, white_wine_form_sql, red_wine_form_sql, matches_dict, choose_random
from app.auth import validate_jwt

wine_routes = Blueprint('wines', __name__)

# The route to return wines that match the users preferences depending on the form


@wine_routes.route('/matches', methods=['post'])
def matches():
    data = request.json
    form = data['form']
    selections = data['selections']

    sql_query = ''
    # Red wine search
    if form == 'red':
        sql_query = red_wine_form_sql(selections)
    elif form == 'white':
        sql_query = white_wine_form_sql(selections)
    elif form == 'rose':
        sql_query = rose_wine_form_sql(selections)
    elif form == 'pairing':
        sql_query = pairing_wine_form_sql(selections)

    sql = text(f'{sql_query} LIMIT 100;')
    result = db.engine.execute(sql)

    matches = matches_dict(result)
    chosen = choose_random(matches, 40)

    return jsonify(chosen)


@wine_routes.route('/<id>')
def wine_details(id):
    wine = Wine.query.get(id).to_dict()
    if not wine:
        pass

    # Next part is to see if the user follows the wine
    validated = validate_jwt(request)
    user_id = validated['user']['id']
    user_follows = None
    follow = Follow.query.filter(
        Follow.user_id == user_id, Follow.wine_id == wine['id']).first()
    if follow:
        user_follows = True
    else:
        user_follows = False

    wine['user_follows'] = user_follows

    return jsonify(wine)


@wine_routes.route('/<id>/find-stores')
def wine_finder(id):
    wine = Wine.query.get(id).to_dict()

    # we have the wine, so now we'll search it with wine finder
    wine_kws = '+'.join(wine['name'].split(' '))

    # we parse an html request for the wine
    url = f'https://www.winefetch.com/websearch_results.html?site=&kw={wine_kws}&year=vintage&size='
    web_url = urllib.request.urlopen(url)
    data = web_url.read()
    soup = BeautifulSoup(data, 'html.parser')

    # grab name
    item_name_arr = soup.select('td.wfc > b')[3:]
    names = [name.get_text() for name in item_name_arr]

    # grab shop name
    shop_name_arr = soup.select('td > a.wf_content_link')[3:]
    shop_names = [shop_name.get_text() for shop_name in shop_name_arr]

    # grab shop location
    shop_location_arr = soup.select('td[width="10"] + td')
    shop_locations = [shop_location.get_text('|')
                      for shop_location in shop_location_arr][:-1]
    shop_locations_parsed = [
        location[location.index('|') + 1:] for location in shop_locations]

    # grab buy link
    buy_link_arr = soup.select('td[class="retail"] > a[rel="nofollow"]')
    buy_links = [buy_link['href'] for buy_link in buy_link_arr]
    buy_links_parsed = [
        f'https://www.winefetch.com{buy_link}' for buy_link in buy_links]

    # make dictionry ciontaining data for each location
    wine_shops = []
    i = 0
    while i < len(shop_names) and i < len(names) and i < len(shop_locations_parsed) and i < len(buy_links_parsed):
        print('comp', wine['name'], names[i])
        # A LOT of matches pulled from the site are not good matches,
        # so we check the similarity to verify a good match
        similarity = SequenceMatcher(None, wine['name'], names[i]).ratio()
        print(similarity)
        if (similarity > 0.5):
            city_state = shop_locations_parsed[i].split(', ')

            wine_shop = {
                'wine_shop': shop_names[i], 'name': names[i], 'city': city_state[0], 'state': city_state[1], 'buy_link': buy_links_parsed[i]}
            wine_shops.append(wine_shop)
        i += 1
    print('shops dict', wine_shops)

    # for i in range(len(shop_names)):

    #     # unexpected difference in arrays would cause errors, hence ternary statements
    #     city_state = ['N/A', 'N/A']
    #     if len(shop_locations_parsed) > i:
    #         city_state = shop_locations_parsed[i].split(', ')

    #     wine_shop = {
    #         'wine_shop': shop_names[i], 'name': names[i] if len(names) > i else 'N/A', 'city': city_state[0], 'state': city_state[1], 'buy_link': buy_links_parsed[i] if len(buy_links_parsed) > i else 'N/A'}
    #     wine_shops.append(wine_shop)
    # print('shops dict', wine_shops)

    return jsonify(wine_shops)
