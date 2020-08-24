from django.shortcuts import render, redirect
from .models import Books
from log_reg_app.models import Users

from django.contrib import messages

# Create your views here.
def index(request):
    if "user_id" not in request.session:
        messages.error(request, "You must be logged in to view that page.")
        return redirect("/")
    
    context ={
        "logged_user": Users.objects.get(id=request.session['user_id']),
        "all_books": Books.objects.all()
    }
    return render(request, "index.html", context)

def book(request, book_id):
    context = {
        "logged_user": Users.objects.get(id=request.session['user_id']),
        "book": Books.objects.get(id=book_id)
    }
    return render(request, "book.html", context)

def add_book(request):
    all_errors = Books.objects.validator(request.POST)

    if len(all_errors) > 0:
        for _, val in all_errors.items():
            messages.error(request, val)
        return redirect('/books')

    book = Books.objects.create(
        title = request.POST["title"],
        desc = request.POST["desc"],
        uploaded_by = Users.objects.get(id=request.session['user_id'])
    )
    return redirect(f'/books/{book.id}')

def add_to_fav(request, book_id):
    user = Users.objects.get(id=request.session['user_id'])
    book = Books.objects.get(id=book_id)
    user.liked_books.add(book)
    user.save()

    return redirect(f"/books/{book_id}")

def remove_from_fav(request, book_id):
    user = Users.objects.get(id=request.session['user_id'])
    book = Books.objects.get(id=book_id)
    user.liked_books.remove(book)
    user.save()

    return redirect(f"/books/{book_id}")

def edit_book(request, book_id):
    book = Books.objects.get(id=book_id)
    all_errors = Books.objects.validator(request.POST)

    if len(all_errors) > 0:
        for _, val in all_errors.items():
            messages.error(request, val)
        return redirect(f'/books/{book.id}')
        
    book.title = request.POST["title"]
    book.desc = request.POST["desc"]
    book.save()

    return redirect(f"/books")

def delete_book(request, book_id):
    book = Books.objects.get(id=book_id)
    book.delete()
    
    return redirect(f"/books")
    