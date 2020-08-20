from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_index),
    path('register', views.register_user),
    path('login', views.login_user),
    path('logout', views.logout),
    path('books', views.index),
    path('add_book', views.add_book),
    path('books/<int:book_id>', views.book),
    path('books/<int:book_id>/add_fav', views.add_to_fav),
    path('books/<int:book_id>/remove_fav', views.remove_from_fav),
    path('books/<int:book_id>/edit', views.edit_book),
    path('books/<int:book_id>/delete', views.delete_book),
]