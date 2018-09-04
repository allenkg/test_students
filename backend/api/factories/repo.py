from api.repos import StudentRepo


class StudentRepoFactory(object):
    @staticmethod
    def create():
        return StudentRepo()

