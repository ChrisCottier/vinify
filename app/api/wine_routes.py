from flask import Blueprint, jsonify, request
from sqlalchemy import text

from app.models import db
from app.models.wines import Wine
from .utils import red_wine_form_sql, matches_dict

wine_routes = Blueprint('wines', __name__)

# The route to return wines that match the users preferences depending on the form


@wine_routes.route('/matches', methods=['post'])
def matches():
    data = request.json
    form = data['form']
    selections = data['selections']
    print('selection', selections)

    # Try to make this through sqlalchemy
    sql_query = red_wine_form_sql(selections)
    print(sql_query)

    sql = text(f'{sql_query} LIMIT 100;')
    result = db.engine.execute(sql)

    matches = matches_dict(result)

    return jsonify(matches)
