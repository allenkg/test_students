from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from api import views

router = DefaultRouter()

urlpatterns = [
    url('^', include(router.urls)),
    url('^test', views.TestView.as_view())
]
