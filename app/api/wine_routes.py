from flask import Blueprint, jsonify, request

from app.models.wines import Wine
from .utils import red_wine_form_sql

wine_routes = Blueprint('wines', __name__)

# The route to return wines that match the users preferences depending on the form


@wine_routes.route('/matches', methods=['post'])
def matches():
    data = request.json
    form = data['form']
    selections = data['selections']
    sql_query = red_wine_form_sql(selections)

    return jsonify('hi')
