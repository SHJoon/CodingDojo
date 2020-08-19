from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login_index),
    path('register', views.register_user),
    path('login_user', views.login_user),
    path('logout', views.logout),
    path('', views.index),
    path('msg', views.create_message),
    path('cmt', views.create_comment)
]