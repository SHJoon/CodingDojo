from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('add_book', views.add_book),
    path('<int:book_id>', views.book),
    path('<int:book_id>/add_fav', views.add_to_fav),
    path('<int:book_id>/remove_fav', views.remove_from_fav),
    path('<int:book_id>/edit', views.edit_book),
    path('<int:book_id>/delete', views.delete_book),
]