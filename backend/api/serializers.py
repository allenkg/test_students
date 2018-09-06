
class StudentSerializer(object):
    @staticmethod
    def serialize(student):
        return {
            'id': student.id,
            'first_name': student.first_name,
            'last_name': student.last_name,
            'email': student.email,
            'phone_number': student.phone_number,
            'id_number': student.id_number,
            'img': str(student.img.url)
        }


class CourseSerializer(object):
    @staticmethod
    def serialize(course):
        return {
            'id': course.id,
            'title': course.title,
            'description': course.description
        }


class InvalidEntityExceptionSerializer(object):
    @staticmethod
    def serialize(exception):
        return {error.source:error.code for error in exception.errors}
