class EntityDoesNotExist(Exception):
    pass


class Error(object):
    def __init__(self, source=None, code=None):
        self.source = source
        self.code = code


class InvalidEntityException(Exception):
    def __init__(self, errors):
        self.errors = errors

    def __str__(self):
        return '\n'.join(['{0.source} {0.code}'.format(error) for error in self.errors])


class UnauthorizedException(Exception):
    pass
