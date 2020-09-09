from flask import Blueprint, jsonify, request
from app.models.users import User

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  return { "users": [user.to_dict() for user in response]}
