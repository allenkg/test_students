from django.urls import path

from api.common.views import ViewWrapper
from api.factories.views import CreateStudentViewFactory, GetAllStudentsViewFactory, ItemStudentViewFactory, \
    CreateCourseViewFactory, GetAllCoursesViewFactory, ItemCourseViewFactory

urlpatterns = [
    path('add-student', ViewWrapper.as_view(view_factory=CreateStudentViewFactory)),
    path('students', ViewWrapper.as_view(view_factory=GetAllStudentsViewFactory)),
    path('student/<:student_id>', ViewWrapper.as_view(view_factory=ItemStudentViewFactory)),
    path('add-course', ViewWrapper.as_view(view_factory=CreateCourseViewFactory)),
    path('courses', ViewWrapper.as_view(view_factory=GetAllCoursesViewFactory)),
    path('course/<:course_id>', ViewWrapper.as_view(view_factory=ItemCourseViewFactory))
]
