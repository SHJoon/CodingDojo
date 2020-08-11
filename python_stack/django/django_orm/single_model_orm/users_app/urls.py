from django.urls import path
from . import views

urlpatters=[
    path('', views.index),
    path('store', views.store),
]