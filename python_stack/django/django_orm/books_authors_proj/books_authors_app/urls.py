from django.urls import path
from . import views

urlpatterns= [
    path('', views.index),
    path('books/create', views.create_book),
    path('books/<int:book_id>', views.books),
    path('books/add_author', views.add_author),
    path('authors', views.authors_root),
    path('authors/create', views.create_author),
    path('authors/<int:author_id>', views.authors),
    path('authors/add_book', views.add_book),
]