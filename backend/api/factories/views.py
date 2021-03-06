from api.factories.interactors import CreateStudentInteractorFactory, GetAllStudentsInteractorFactory, \
    ItemStudentInteractorFactory, CreateCourseInteractorFactory, GetAllCoursesInteractorFactory, \
    ItemCourseInteractorFactory
from api.views.auth import GetAllStudentsView, ItemStudentView, CreateStudentView, CreateCourseView, GetAllCoursesView, \
    ItemCourseView


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


class CreateCourseViewFactory(object):
    @staticmethod
    def create():
        create_course_interactor = CreateCourseInteractorFactory.create()
        return CreateCourseView(create_course_interactor)


class GetAllCoursesViewFactory(object):
    @staticmethod
    def create():
        get_all_courses_interactor = GetAllCoursesInteractorFactory.create()
        return GetAllCoursesView(get_all_courses_interactor)


class ItemCourseViewFactory(object):
    @staticmethod
    def create():
        item_course_interactor = ItemCourseInteractorFactory.create()
        return ItemCourseView(item_course_interactor)
