from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('gold/<location>', views.process_money),
    path('reset', views.reset),
    path('bet', views.set_condition),
]