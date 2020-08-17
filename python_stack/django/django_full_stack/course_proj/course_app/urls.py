from django.urls import path
from . import views

urlpatterns=[
    path('', views.root),
    path('courses', views.index),
    path('courses/add', views.add_course),
    path('courses/destroy/<int:course_id>', views.destroy),
    path('courses/delete/<int:course_id>', views.delete)
]