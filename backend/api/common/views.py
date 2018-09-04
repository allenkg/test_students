import json

from django.http import HttpResponse
from django.views import View


class ViewWrapper(View):
    view_factory = None

    def dispatch(self, request, *args, **kwargs):
        # Try to dispatch to the right method; if a method doesn't exist,
        # defer to the error handler. Also defer to the error handler if the
        # request method isn't on the approved list.
        if request.method.lower() in self.http_method_names:
            handler = getattr(self, request.method.lower(), self.http_method_not_allowed)
        else:
            handler = self.http_method_not_allowed
        try:
            return handler(request, *args, **kwargs)
        except AttributeError:
            return self.http_method_not_allowed(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        # logged_user_id = self._authorize(request)
        # kwargs.update({'logged_user_id': logged_user_id})

        body, status = self.view_factory.create().get(**kwargs)

        return HttpResponse(json.dumps(body) if body else '', status=status, content_type='application/json')

    def post(self, request, *args, **kwargs):
        # logged_user_id = self._authorize(request)
        # kwargs.update({'logged_user_id': logged_user_id})

        if request.body:
            kwargs.update(json.loads(request.body.decode()))
        body, status = self.view_factory.create().post(**kwargs)

        return HttpResponse(json.dumps(body) if body else '', status=status, content_type='application/json')

    def put(self, request, *args, **kwargs):
        # logged_user_id = self._authorize(request)
        # kwargs.update({'logged_user_id': logged_user_id})

        if request.body:
            kwargs.update(json.loads(request.data.decode()))
        body, status = self.view_factory.create().put(**kwargs)

        return HttpResponse(json.dumps(body) if body else '', status=status, content_type='application/json')

    def delete(self, request, *args, **kwargs):
        # logged_user_id = self._authorize(request)
        # kwargs.update({'logged_user_id': logged_user_id})

        if request.body:
            kwargs.update(json.loads(request.data.decode()))
        body, status = self.view_factory.create().delete(**kwargs)

        return HttpResponse(json.dumps(body) if body else '', status=status, content_type='application/json')

    def _authorize(self, request):
        # auth_header = request.META.get('HTTP_AUTHORIZATION')
        # if auth_header is None:
        #     return None
        #
        # token = auth_header.replace('JWT ', '')
        # return AuthorizeUserInteractorFactory.create().set_params(token).execute()
        pass