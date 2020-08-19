from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_index),
    path('register', views.register_user),
    path('login', views.login_user),
    path('logout', views.logout),
    path('the_wall', views.index),
    path('msg', views.create_message),
    path('cmt', views.create_comment),
    path('cmt/<int:cmt_id>/delete', views.delete_comment)
]