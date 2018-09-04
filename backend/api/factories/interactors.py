from django.conf import settings

from api.factories.repo import StudentRepoFactory
from api.interactors import CreateStudentInteractor, GetAllStudentsInteractor, StudentInteractor


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


class AuthorizeUserInteractorFactory(object):
    pass