from api.common.exceptions import Error, InvalidEntityException


class CreateStudentInteractor(object):
    def __init__(self, student_repo):
        self.student_repo = student_repo
        self.errors = []

    def set_params(self, **kwargs):
        self.first_name = kwargs.get('first_name')
        self.last_name = kwargs.get('last_name')
        self.email = kwargs.get('email')
        self.phone_number = kwargs.get('phone_number')
        self.id_number = kwargs.get('id_number')
        return self

    def execute(self):
        self.validate()
        return self.student_repo.create_student(
            self.first_name,
            self.last_name,
            self.email,
            self.phone_number,
            self.id_number
        )

    def validate(self):
        if not self.first_name:
            self.errors.append(Error('first_name', 'empty'))
        if not self.last_name:
            self.errors.append(Error('last_name', 'empty'))
        if not self.email:
            self.errors.append(Error('email', 'empty'))
        if not self.phone_number:
            self.errors.append(Error('phone_number', 'empty'))
        if not self.id_number:
            self.errors.append(Error('id_number', 'empty'))
        if len(self.errors) > 0:
            raise InvalidEntityException(self.errors)


class GetAllStudentsInteractor(object):
    def __init__(self, student_repo):
        self.student_repo = student_repo

    def set_params(self, page_number=None, offset=None, search_query=None):
        self.page_number = page_number
        self.offset = offset
        self.search_query = search_query
        return self

    def execute(self):
        if self.search_query:
            return self.student_repo.search_student(self.search_query)
        else:
            return self.student_repo.get_all_students()


class CourseInteractor(object):
    def __init__(self, course_repo):
        self.course_repo = course_repo
        self.errors = []

    def set_params(self, course_id=None, title=None, description=None, img=None):
        self.course_id = course_id
        self.title = str(title)
        self.description = str(description)
        return self

    def delete_course(self):
        return self.course_repo.delete_course(self.course_id)

    def get_course(self):
        return self.course_repo.get_course_by_id(self.course_id)

    def update_course(self):
        self.validate()
        return self.course_repo.update_course(
            self.course_id,
            self.title,
            self.description
        )

    def validate(self):
        if not self.title:
            self.errors.append(Error('title', 'empty'))
        if not self.description:
            self.errors.append(Error('description', 'empty'))
        if len(self.errors) > 0:
            raise InvalidEntityException(self.errors)


class StudentInteractor(object):
    def __init__(self, student_repo):
        self.student_repo = student_repo
        self.errors = []

    def set_params(self, student_id, email=None, first_name=None, last_name=None, course=None, phone_number=None,
                   id_number=None, file=None, course_id=None):
        self.student_id = student_id
        self.email = str(email),
        self.first_name = str(first_name),
        self.last_name = str(last_name),
        self.course = course,
        self.phone_number = str(phone_number),
        self.id_number = str(id_number),
        self.file = file
        self.course_id = course_id
        return self

    def delete_student(self):
        if self.course_id:
            return self.student_repo.remove_from_course(self.student_id)
        else:
            return self.student_repo.delete_student(self.student_id)

    def get_student(self):
        return self.student_repo.get_student_by_id(self.student_id)

    def update_student(self):
        self.validate()
        return self.student_repo.update_student(
            self.student_id,
            self.email[0],
            self.first_name[0],
            self.last_name[0],
            self.course[0],
            self.phone_number[0],
            self.id_number[0]
        )

    def validate(self):
        student = self.student_repo.get_student_by_id(self.student_id)
        if student.email != self.email:
            if self.student_repo.is_email_already_used(self.email):
                self.errors.append(Error('email', 'already_used'))
        if not self.first_name:
            self.errors.append(Error('first_name', 'empty'))
        if not self.last_name:
            self.errors.append(Error('last_name', 'empty'))
        if not self.phone_number:
            self.errors.append(Error('phone_number', 'empty'))
        if not self.id_number:
            self.errors.append(Error('id_number', 'empty'))
        if len(self.errors) > 0:
            raise InvalidEntityException(self.errors)


class CreateCourseInteractor(object):
    def __init__(self, course_repo):
        self.course_repo = course_repo
        self.errors = []

    def set_params(self, **kwargs):
        self.title = kwargs.get('title')
        self.description = kwargs.get('description')
        self.img = kwargs.get('img')
        return self

    def execute(self):
        self.validate()
        return self.course_repo.create_course(
            self.title,
            self.description,
            self.img
        )

    def validate(self):
        if not self.title:
            self.errors.append(Error('title', 'empty'))
        if not self.description:
            self.errors.append((Error('description', 'empty')))
        if len(self.errors) > 0:
            raise InvalidEntityException(self.errors)


class GetAllCoursesInteractor(object):
    def __init__(self, course_repo):
        self.course_repo = course_repo

    def execute(self):
        if not self.course_id and not self.search_query:
            return self.course_repo.get_all_courses(self.offset, self.page_number)
        elif self.search_query:
            return self.course_repo.search_course(self.search_query)
        else:
            return self.course_repo.get_all_course_students(self.course_id)

    def set_params(self, course_id=None, search_query=None, offset=None, page_number=None):
        self.course_id = course_id
        self.search_query = search_query
        self.offset = offset
        self.page_number = page_number
        return self
