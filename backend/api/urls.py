from django.urls import path

from api.common.views import ViewWrapper
from api.factories.views import CreateStudentViewFactory, GetAllStudentsViewFactory, ItemStudentViewFactory

urlpatterns = [
    path('create-student', ViewWrapper.as_view(view_factory=CreateStudentViewFactory)),
    path('students', ViewWrapper.as_view(view_factory=GetAllStudentsViewFactory)),
    path('student/<:student_id>', ViewWrapper.as_view(view_factory=ItemStudentViewFactory))
]
