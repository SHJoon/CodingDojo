from django.shortcuts import render, redirect
from .models import Book, Author

# Create your views here.
def index(request):
    context={
        "all_books":Book.objects.all(),
        "all_authors":Author.objects.all()
    }
    return render(request, "index.html", context)

def create_book(request):
    Book.objects.create(
        title = request.POST["title"],
        desc = request.POST["description"]
    )

    return redirect("/")

def books(request, book_id):
    context={
        "book":Book.objects.get(id=book_id),
        "all_authors":Author.objects.all()
    }
    return render(request, "book.html", context)

def add_author(request):
    book = Book.objects.get(id=request.POST["book_id"])
    author = Author.objects.get(id=request.POST["author_id"])
    book.publishers.add(author)

    return redirect(f"/books/{request.POST['book_id']}")


def authors_root(request):
    context={
        "all_books":Book.objects.all(),
        "all_authors":Author.objects.all()
    }
    return render(request, "authors.html", context)

def create_author(request):
    Author.objects.create(
        first_name = request.POST["first_name"],
        last_name = request.POST["last_name"],
        notes = request.POST["notes"]
    )

    return redirect("/authors")

def authors(request, author_id):
    context={
        "author":Author.objects.get(id=author_id),
        "all_books":Book.objects.all()
    }
    return render(request, "author.html", context)

def add_book(request):
    author = Author.objects.get(id=request.POST["author_id"])
    book = Book.objects.get(id=request.POST["book_id"])
    author.books.add(book)

    return redirect(f"/authors/{request.POST['author_id']}")