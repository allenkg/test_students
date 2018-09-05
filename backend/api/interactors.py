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
        else:
            self.errors.append(Error('email', 'already_used'))
        if not self.phone_number:
            self.errors.append(Error('phone_number', 'empty'))
        if not self.id_number:
            self.errors.append(Error('id_number', 'empty'))
        if len(self.errors) > 0:
            raise InvalidEntityException(self.errors)


class GetAllStudentsInteractor(object):
    def __init__(self, student_repo):
        self.student_repo = student_repo

    def execute(self):
        return self.student_repo.get_all_students()


class StudentInteractor(object):
    def __init__(self, student_repo):
        self.student_repo = student_repo
        self.errors = []

    def set_params(self, student_id, email, first_name, last_name, course_id, phone_number, id_number):
        self.student_id = student_id
        self.email = email,
        self.first_name = first_name,
        self.last_name = last_name,
        self.course = course_id,
        self.phone_number = phone_number,
        self.id_number = id_number
        return self

    def delete_student(self):
        return self.student_repo.delete_student(self.student_id)

    def get_student(self):
        return self.student_repo.get_student_by_id(self.student_id)

    def update_student(self):
        self.validate()
        return self.student_repo.update_student(
            self.student_id,
            self.email,
            self.first_name,
            self.last_name,
            self.course,
            self.phone_number,
            self.id_number
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