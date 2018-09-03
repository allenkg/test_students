from django.shortcuts import render
from rest_framework import views
from rest_framework.response import Response


class TestView(views.APIView):
    def get(self, request, *args, **kwargs):
        return Response(data={'data': 'test'})
