from api.common.exceptions import EntityDoesNotExist
from api.models import Student


class StudentRepo(object):
    def get_student_by_id(self, id):
        try:
            student = Student.objects.get(pk=id)
        except Student.DoesNotExist:
            raise EntityDoesNotExist

        return student

    def create_student(self, email, first_name, last_name, phone_number, id_number):
        student = Student()
        student.first_name = first_name
        student.last_name = last_name
        student.email = email
        student.phone_number = phone_number
        student.id_number = id_number
        student.save()

    def save_student(self, student):
        student.save()

    def is_email_already_used(self, email):
        return Student.objects.filter(email=email).exists()

    def get_all_students(self):
        return Student.objects.all()

    def delete_student(self, id):
        try:
            student = Student.objects.get(pk=id)
            student.is_deleted = True
        except Student.DoesNotExist:
            raise EntityDoesNotExist

        return student

    def update_student(self, student_id, email, first_name, last_name, course, phone_number, id_number):
        student = self.get_student_by_id(student_id)
        student.student_id = student_id
        student.email = email if email else student.email
        student.first_name = first_name
        student.last_name = last_name
        student.course = course
        student.phone_number = phone_number
        student.id_number = id_number
        self.save_student(student)


