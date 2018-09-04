from api.factories.interactors import CreateStudentInteractorFactory, GetAllStudentsInteractorFactory, \
    ItemStudentInteractorFactory
from api.views.auth import GetAllStudentsView, ItemStudentView, CreateStudentView


class CreateStudentViewFactory(object):
    @staticmethod
    def create():
        create_student_interactor = CreateStudentInteractorFactory.create()
        return CreateStudentView(create_student_interactor)


class GetAllStudentsViewFactory(object):
    @staticmethod
    def create():
        get_all_students_interactor = GetAllStudentsInteractorFactory.create()
        return GetAllStudentsView(get_all_students_interactor)


class ItemStudentViewFactory(object):
    @staticmethod
    def create():
        item_student_interactor = ItemStudentInteractorFactory.create()
        return ItemStudentView(item_student_interactor)
