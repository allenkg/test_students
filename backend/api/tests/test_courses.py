from django.test import TestCase
import json
from api.models import Course, Student


class CourseTests(TestCase):
    fixtures = [
        'api/tests/fixtures/courses.json'
    ]

    def test_get_all_courses(self):
        response = self.client.get('/api/courses')
        self.assertEqual(response.status_code, 200)

    def test_get_course(self):
        response = self.client.get('/api/course/1')
        self.assertEqual(response.status_code, 200)

    def test_get_course_students(self):
        response = self.client.get('/api/courses?course_id=1')
        self.assertEqual(response.status_code, 200)

    def test_search_course(self):
        response = self.client.get('/api/courses?search_query=pyth')
        self.assertEqual(response.status_code, 200)

