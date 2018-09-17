from api.common.exceptions import InvalidEntityException
from api.serializers import StudentSerializer, InvalidEntityExceptionSerializer, CourseSerializer

HTTP_STATUS_OK_CODE = 200
HTTP_BAD_REQUEST_STATUS_CODE = 400


class CreateStudentView(object):
    def __init__(self, create_student_interactor):
        self.create_student_interactor = create_student_interactor

    def post(self, **kwargs):
        try:
            student = self.create_student_interactor.set_params(**kwargs).execute()
            body = StudentSerializer.serialize(student)
            status = HTTP_STATUS_OK_CODE
        except InvalidEntityException as e:
            body = InvalidEntityExceptionSerializer.serialize(e)
            status = HTTP_BAD_REQUEST_STATUS_CODE
        return body, status


class GetAllStudentsView(object):
    def __init__(self, get_all_students_interactor):
        self.get_all_students_interactor = get_all_students_interactor

    def get(self, **kwargs):
        body = []
        try:
            students = self.get_all_students_interactor.set_params(**kwargs).execute()
            if students:
                for student in students:
                    body.append(StudentSerializer.serialize(student))
            status = HTTP_STATUS_OK_CODE
        except InvalidEntityException as e:
            body = InvalidEntityExceptionSerializer.serialize(e)
            status = HTTP_BAD_REQUEST_STATUS_CODE
        return body, status


class ItemStudentView(object):
    def __init__(self, item_student_interactor):
        self.item_student_interactor = item_student_interactor

    def get(self, **kwargs):
        try:
            student = self.item_student_interactor.set_params(**kwargs).get_student()
            body = StudentSerializer.serialize(student)
            status = HTTP_STATUS_OK_CODE
        except InvalidEntityException as e:
            body = InvalidEntityExceptionSerializer.serialize(e)
            status = HTTP_BAD_REQUEST_STATUS_CODE

        return body, status

    def put(self, **kwargs):
        try:
            student = self.item_student_interactor.set_params(**kwargs).update_student()
            body = StudentSerializer.serialize(student)
            status = HTTP_STATUS_OK_CODE
        except InvalidEntityException as e:
            body = InvalidEntityExceptionSerializer.serialize(e)
            status = HTTP_BAD_REQUEST_STATUS_CODE

        return body, status

    def delete(self, **kwargs):
        try:
            student = self.item_student_interactor.set_params(**kwargs).delete_student()
            body = StudentSerializer.serialize(student)
            status = HTTP_STATUS_OK_CODE
        except InvalidEntityException as e:
            body = InvalidEntityExceptionSerializer.serialize(e)
            status = HTTP_BAD_REQUEST_STATUS_CODE

        return body, status


class ItemCourseView(object):
    def __init__(self, item_course_interactor):
        self.item_course_interactor = item_course_interactor

    def get(self, **kwargs):
        try:
            course = self.item_course_interactor.set_params(**kwargs).get_course()
            body = CourseSerializer.serialize(course)
            status = HTTP_STATUS_OK_CODE
        except InvalidEntityException as e:
            body = InvalidEntityExceptionSerializer.serialize(e)
            status = HTTP_BAD_REQUEST_STATUS_CODE

        return body, status

    def put(self, **kwargs):
        try:
            course = self.item_course_interactor.set_params(**kwargs).update_course()
            body = CourseSerializer.serialize(course)
            status = HTTP_STATUS_OK_CODE
        except InvalidEntityException as e:
            body = InvalidEntityExceptionSerializer.serialize(e)
            status = HTTP_BAD_REQUEST_STATUS_CODE

        return body, status

    def delete(self, **kwargs):
        try:
            course = self.item_course_interactor.set_params(**kwargs).delete_course()
            body = CourseSerializer.serialize(course)
            status = HTTP_STATUS_OK_CODE
        except InvalidEntityException as e:
            body = InvalidEntityExceptionSerializer.serialize(e)
            status = HTTP_BAD_REQUEST_STATUS_CODE

        return body, status


class CreateCourseView(object):
    def __init__(self, create_course_interactor):
        self.create_course_interactor = create_course_interactor

    def post(self, **kwargs):
        try:
            course = self.create_course_interactor.set_params(**kwargs).execute()
            body = CourseSerializer.serialize(course)
            status = HTTP_STATUS_OK_CODE
        except InvalidEntityException as e:
            body = InvalidEntityExceptionSerializer.serialize(e)
            status = HTTP_BAD_REQUEST_STATUS_CODE
        return body, status


class GetAllCoursesView(object):
    def __init__(self, get_all_courses_interactor):
        self.get_all_courses_interactor = get_all_courses_interactor

    def get(self, **kwargs):
        body = {}
        data = []
        try:
            response = self.get_all_courses_interactor.set_params(**kwargs).execute()
            if response['courses']:
                body['allPages'] = response['allPages']
                body['offset'] = response['offset']
                for course in response['courses']:
                    try:
                        if course.title:
                            data.append(CourseSerializer.serialize(course))
                    except:
                        data.append(StudentSerializer.serialize(course))
            body['data'] = data
            status = HTTP_STATUS_OK_CODE
        except InvalidEntityException as e:
            body = InvalidEntityExceptionSerializer.serialize(e)
            status = HTTP_BAD_REQUEST_STATUS_CODE
        return body, status
