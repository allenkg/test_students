
class StudentSerializer(object):
    @staticmethod
    def serialize(student):
        return {
            'id': student.id,
            'first_name': student.first_name,
            'last_name': student.last_name,
            'email': student.email,
            'phone_number': student.phone_number,
            'id_number': student.id_number
        }


class InvalidEntityExceptionSerializer(object):
    @staticmethod
    def serialize(exception):
        return {error.source:error.code for error in exception.errors}
