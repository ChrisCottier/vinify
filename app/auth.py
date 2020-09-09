import jwt
from .config import Config

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
