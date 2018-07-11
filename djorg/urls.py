"""djorg URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
# re_path
from rest_framework import routers
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
#     TokenVerifyView
# )
from notes.api import NoteViewSet, PostStuff #POST
from notes.views import CreateNote # POST 


from graphene_django.views import GraphQLView


router = routers.DefaultRouter()
router.register(r'notes', NoteViewSet)
# router.register(r'createnote', CreateNote.as_view()) #POSt stuff

urlpatterns = [
    path('graphql/', GraphQLView.as_view(graphiql=True)),
    path('api/', include(router.urls)),
    path('newnotes/', CreateNote.as_view()),
    path('', TemplateView.as_view(template_name='djorg_base.html')),
    path('bookmarks/', include('bookmarks.urls')),
    path('admin/', admin.site.urls),
    # re_path(r'^api/token/$', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # re_path(r'^api/token/refresh/$', TokenRefreshView.as_view(), name='token_refresh'),
    # re_path(r'^api/token/verify/$', TokenVerifyView.as_view(), name='token_verify'),
]
