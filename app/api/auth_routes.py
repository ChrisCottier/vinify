from flask import Blueprint, jsonify, request
import bcrypt

from app.models import db
from app.models.users import User
from app.auth import create_jwt, validate_jwt


auth_routes = Blueprint('auth', __name__)

# Route to post a new user


@auth_routes.route('', methods=['post'])
def sign_up():
    data = request.json

    # Check that validationsTODO

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

    # get user and create jwt to return
    # user=User.query.filter(User.email == data['email']).first().to_dict()

    jwt = create_jwt(new_user.to_dict())

    return jsonify({'validated': True, "user": new_user.to_dict(), "token": str(jwt)})


@auth_routes.route('/login', methods=['post'])
def log_in():
    # function to check login and handle errors

    data = request.json
    user = User.query.filter(User.email == data['email']).first()
    print(user)
    hashed_password = user.hashed_password
    if bcrypt.checkpw(data['password'].encode(), hashed_password.encode()):

        user_data = user.to_dict()
        jwt = create_jwt(user_data)
        return jsonify({'validated': True, "user": user_data, "token": str(jwt)})
    else:

        return jsonify('Bad Login')


@auth_routes.route('/restore')
def restore():
    # auth_header= request.headers['Authorization']
    # print(auth_header)
    # print(auth_header[7:])
    validated = validate_jwt(request)
    if (validated):
        return validated
    else:
        return jsonify({'validated': False})
