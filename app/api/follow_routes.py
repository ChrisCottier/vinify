from flask import Blueprint, jsonify, request
from app.models import db

from app.models.follows import Follow
from app.models.users import User
from app.auth import validate_jwt

follow_routes = Blueprint('follows', __name__)


@follow_routes.route('', methods=['post'])
def toggle_follow():
    data = request.json
    wine_id = data

    validated = validate_jwt(request)
    user_id = validated['user']['id']

    # Check to see if the user follows already or not
    follow = Follow.query.filter(
        Follow.wine_id == wine_id, Follow.user_id == user_id).first()

    following = None
    if not follow:
        new_follow = Follow(user_id=user_id, wine_id=wine_id)
        db.session.add(new_follow)
        following = True
    else:
        db.session.delete(follow)
        following = False
    db.session.commit()

    # user_follows = Follow.query.filter(Follow.user_id == user_id)
    # follow_ids = [user_follows.to_dict()['wine_id'] for follow in user_follows]

    return jsonify(following)


# Route to get all wines user follows
@follow_routes.route('/user/<user_id>')
def user_follows(user_id):
    print('here')
    validated = validate_jwt(request)
    jwt_user_id = validated['user']['id']
    if (jwt_user_id != int(user_id)):
        return jsonify(False)
    follows = Follow.query.filter(Follow.user_id == int(user_id)).all()
    follows_dict = [follow.wine.to_dict() for follow in follows]
    # follows_dict = [follow['wine'].to_dict() for follow in follows_dict]
    return jsonify(follows_dict)
