from django.test import TestCase
import json
from api.models import Course, Student


class StudentTests(TestCase):
    fixtures = [
        'api/tests/fixtures/students.json',
        'api/tests/fixtures/courses.json'
    ]

    def test_get_all_students(self):
        response = self.client.get('/api/students')
        self.assertEqual(response.status_code, 200)

    def test_get_student(self):
        response = self.client.get('/api/student/1')
        self.assertEqual(response.status_code, 200)

    def test_edit_student(self):
        response = self.client.put('/api/student/1',
                                   payload={
                                       'student_id': 1,
                                       'first_name': 'Ivanidze',
                                       'last_name': 'Ivanov',
                                       'email': 'ivan@iva.nov',
                                       'phone_number': '555-0167',
                                       'courses': {
                                           'id': 1,
                                           'title': "course One",
                                           'description': "Description for course One"
                                       }
                                   })
        self.assertEqual(response.status_code, 200)

    def test_search_student(self):
        response = self.client.get('/api/students?search_query=pyth')
        self.assertEqual(response.status_code, 200)

    def test_delete_student_from_course(self):
        response = self.client.delete('/api/student/2?course_id=1')
        self.assertEqual(response.status_code, 200)

