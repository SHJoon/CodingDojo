from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('guess', views.process_form),
    path('reset', views.reset_session),
]