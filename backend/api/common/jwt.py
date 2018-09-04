import datetime
import jwt


def issue_token(user_id, expiration, secret):
    return jwt.encode({'user_id': user_id, 'exp': expiration}, secret, algorithm='HS256')


def issue_access_refresh_tokens(user_id, token_expiration, refresh_token_expiration, secret):
    token_expiration_time = datetime.datetime.utcnow() + datetime.timedelta(days=token_expiration)
    refresh_token_expiration_time = datetime.datetime.utcnow() + datetime.timedelta(days=refresh_token_expiration)
    token = issue_token(user_id, token_expiration_time, secret)
    refresh_token = issue_token(user_id, refresh_token_expiration_time, secret)

    return {
        "access_token": token.decode(),
        "refresh_token": refresh_token.decode()
    }


def decode_token(token, secret):
    return jwt.decode(token, secret, algorithms='HS256')