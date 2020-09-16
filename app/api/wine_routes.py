from flask import Blueprint, jsonify, request
from app.models.wines import Wine

wine_routes = Blueprint('wines', __name__)

# The route to return wines that match the users preferences depending on the form


@wine_routes.route('/matches', methods=['post'])
def matches():
    data = request.json
    form = data['form']
    selections = data['selections']

    return jsonify('hi')


def red_wine_form_sql(selections):
    query = 'WHERE wines.color = red'
    countries = countries_sql(selections['country'])


def countries_sql(countries):
    init = f'AND wines.country'
