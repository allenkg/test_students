from api.repos import StudentRepo, CourseRepo


class StudentRepoFactory(object):
    @staticmethod
    def create():
        return StudentRepo()


class CourseRepoFactory(object):
    @staticmethod
    def create():
        return CourseRepo()

