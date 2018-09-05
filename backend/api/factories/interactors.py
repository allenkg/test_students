from django.conf import settings

from api.factories.repo import StudentRepoFactory, CourseRepoFactory
from api.interactors import CreateStudentInteractor, GetAllStudentsInteractor, StudentInteractor, CreateCourseInteractor


class CreateStudentInteractorFactory(object):
    @staticmethod
    def create():
        student_repo = StudentRepoFactory.create()
        return CreateStudentInteractor(student_repo)


class GetAllStudentsInteractorFactory(object):
    @staticmethod
    def create():
        student_repo = StudentRepoFactory.create()
        return GetAllStudentsInteractor(student_repo)


class ItemStudentInteractorFactory(object):
    @staticmethod
    def create():
        student_repo = StudentRepoFactory.create()
        return StudentInteractor(student_repo)


class CreateCourseInteractorFactory(object):
    @staticmethod
    def create():
        course_repo = CourseRepoFactory.create()
        return CreateCourseInteractor(course_repo)


class AuthorizeUserInteractorFactory(object):
    pass