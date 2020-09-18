from flask import Blueprint, jsonify, request
from sqlalchemy import text

from app.models import db
from app.models.wines import Wine
from app.models.follows import Follow
from .wine_queries import white_wine_form_sql, red_wine_form_sql, matches_dict, choose_random
from app.auth import validate_jwt

wine_routes = Blueprint('wines', __name__)

# The route to return wines that match the users preferences depending on the form


@wine_routes.route('/matches', methods=['post'])
def matches():
    data = request.json
    form = data['form']
    selections = data['selections']
    print('selection', selections)

    sql_query = ''
    # Red wine search
    if form == 'red':
        sql_query = red_wine_form_sql(selections)
    elif form == 'white':
        sql_query = white_wine_form_sql(selections)

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
        print(follow)
        user_follows = True
    else:
        user_follows = False
    print(user_follows)

    wine['user_follows'] = user_follows

    return jsonify(wine)
