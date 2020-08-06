from django.urls import path
from . import views
urlpatterns = [
    path('', views.root),
    path('blogs/json', views.json),
    path('blogs', views.index),
    path('blogs/new', views.new),
    path('blogs/create', views.create),
    path('blogs/<number>', views.show),
    path('blogs/<number>/edit', views.edit),
    path('blogs/<number>/destroy', views.destroy),
]