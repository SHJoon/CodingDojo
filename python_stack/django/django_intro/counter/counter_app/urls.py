from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),
    path('destroy_session',views.destroy),
    path('add_another',views.increment_by_one),
    path('add_more',views.increment)
]