import jwt
import bcrypt
from varname import Wrapper
from .config import Config
from app.models.users import User

# Creates a jwt for a user who has logged in or signed up successfully.


def create_jwt(user):
    user_data = {
        "id": user["id"],
        "email": user["email"],
        "name": user["name"]
    }
    new_jwt = jwt.encode(user_data, Config.JWT_SECRET, algorithm='HS256')
    return new_jwt


# Validates the user is authenticated through authorization on request. returns the abbreviated user data and token if verified
def validate_jwt(request):
    auth_header = request.headers['Authorization']
    token = auth_header[7:]
    try:
        payload = jwt.decode(token, Config.JWT_SECRET)
        return {'validated': True, "user": payload, "token": token}
    except:
        return False

# This function runs validation checks for sign up. It returns a list of errors (if any)


def validate_sign_up(data):
    name = data['name']
    email = data['email']
    password = data['password']
    confirm_password = data['confirmPassword']

    errors = []

    user_exists = User.query.filter(User.email == email).first()
    if user_exists:
        errors.append('That email is already in use by another user.')

    if password != confirm_password:
        errors.append('Password and confirm password must match')

    fields = [name, email, password]
    title = ['Name', 'Email', 'Password']

    for i in range(len(title)):
        if (len(fields[i]) < 3):
            errors.append(
                f'{title[i]} must be at least 3 characters long')
        if (len(fields[i]) > 49):
            errors.append(
                f'{title[i]} must be less than 50 characters long')
    return errors

    # email not used
    # passwords match
    #


def validate_log_in(data):
    email = data['email']
    password = data['password']

    user_exists = User.query.filter(User.email == email).first()
    print('user exists', user_exists)
    if not user_exists:
        return ['There is no account associated with that email.']

    hashed_password = user_exists.hashed_password
    if not bcrypt.checkpw(password.encode(), hashed_password.encode()):
        return ['Invalid password for that account.']

    return []

    # email not used
    # passwords match
    # lengths
