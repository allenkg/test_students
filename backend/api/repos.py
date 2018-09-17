from api.common.exceptions import EntityDoesNotExist
from api.models import Student, Course


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
        return student

    def save_student(self, student):
        student.save()

    def is_email_already_used(self, email):
        return Student.objects.filter(email=email).exists()

    def get_all_students(self):
        return Student.objects.filter(is_deleted=False)

    def remove_from_course(self, student_id):
        student = Student.objects.get(id=student_id)
        student.courses = None
        student.save()
        return student

    def delete_student(self, id):
        try:
            student = Student.objects.get(pk=id)
            student.is_deleted = True
        except Student.DoesNotExist:
            raise EntityDoesNotExist

        return student

    def add_course(self, course_id):
        return Course.objects.get(id=course_id)

    def search_student(self, search_query):
        students = Student.objects.filter(first_name__icontains=search_query[0])
        return students

    def update_student(self, student_id, email, first_name, last_name, course, phone_number, id_number):
        student = self.get_student_by_id(student_id)
        student.student_id = student_id
        student.email = email if email else student.email
        student.first_name = first_name
        student.last_name = last_name
        if course:
            student.courses = self.add_course(course['id'])
        student.phone_number = phone_number
        student.id_number = id_number
        self.save_student(student)
        return student


class CourseRepo(object):
    def get_course_by_id(self, id):
        try:
            course = Course.objects.get(pk=id)
        except Student.DoesNotExist:
            raise EntityDoesNotExist

        return course

    def create_course(self, title, description, img):
        course = Course()
        course.title = title
        course.description = description
        course.img = img
        course.save()
        return course

    def save_course(self, sourse):
        sourse.save()

    def get_all_courses(self, offset=None, page_number=None):
        courses = Course.objects.filter(is_deleted=False)
        response = {}
        if offset:
            page_number = int(page_number[0])
            offset = int(offset[0])
            page_offset = 0
            if page_number <= 1:
                response = {
                    'courses': courses[:offset],
                    'allPages': len(courses),
                    'offset': offset
                }
            else:
                page_offset = offset * page_number
                response = {
                    'courses': courses[offset:page_offset],
                    'allPages': len(courses),
                    'offset': offset
                }
        else:
            response = {
                'courses': courses,
                'allPages': len(courses),
                'offset': offset
            }
        return response

    def get_all_course_students(self, course_id):
        students = Student.objects.filter(courses_id=course_id[0], is_deleted=False)
        response = {
            'courses': students,
            'allPages': len(students),
            'offset': ''
        }
        return response

    def delete_course(self, id):
        try:
            course = Course.objects.get(pk=id)
            course.is_deleted = True
        except Student.DoesNotExist:
            raise EntityDoesNotExist

        return course

    def update_course(self, id, title, description):
        course = self.get_course_by_id(id)
        course.title = title
        course.description = description
        course.save()
        return course

    def search_course(self, search_query):
        course = Course.objects.filter(title__icontains=search_query[0])
        response = {
            'courses': course,
            'allPages': len(course),
            'offset': ''
        }
        return response
