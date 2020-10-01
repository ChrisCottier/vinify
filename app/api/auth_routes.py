from flask import Blueprint, jsonify, request
import bcrypt

from app.models import db
from app.models.users import User
from app.auth import create_jwt, validate_jwt, validate_log_in, validate_sign_up


auth_routes = Blueprint('auth', __name__)

# Route to post a new user


@auth_routes.route('', methods=['post'])
def sign_up():
    data = request.json

    # function to check sign-up and handle errors
    errors = validate_sign_up(data)
    if (len(errors) > 0):
        return jsonify({'validated': False, 'errors': errors})

    # Create a hashed password
    password = data['password'].encode()
    hashed_password = bcrypt.hashpw(
        password, bcrypt.gensalt(14)).decode('utf-8')

    # Generate and add new user to db
    new_user = User(name=data['name'],
                    email=data['email'],
                    hashed_password=hashed_password)
    db.session()
    db.session.add(new_user)
    db.session.commit()

    # create jwt to return
    jwt = create_jwt(new_user.to_dict())

    return jsonify({'validated': True, "user": new_user.to_dict(), "token": str(jwt)})

# Log in route


@auth_routes.route('/login', methods=['post'])
def log_in():

    data = request.json

    # function to check login and handle errors
    errors = validate_log_in(data)
    if len(errors) > 0:
        return jsonify({'validated': False, 'errors': errors})

    user = User.query.filter(User.email == data['email']).first().to_dict()
    jwt = create_jwt(user)
    return jsonify({'validated': True, "user": user, "token": str(jwt)})

# On page refresh, this route checks if the user has jwt and if yes, restores session


@auth_routes.route('/restore')
def restore():

    validated = validate_jwt(request)
    if (validated):
        return validated
    else:
        return jsonify({'validated': False})
