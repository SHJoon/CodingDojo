from django.shortcuts import render, redirect
from django.contrib import messages

from .models import Users, Books
import bcrypt

# Functions for handling Registration
def login_index(request):

    return render(request, 'login.html')

def register_user(request):
    all_errors = Users.objects.validator(request.POST)

    if len(all_errors) > 0:
        for _, val in all_errors.items():
            messages.error(request, val)
        return redirect('/')

    password = request.POST['registered_password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    
    try:
        created_user = Users.objects.create(
            first_name = request.POST['registered_first_name'],
            last_name = request.POST['registered_last_name'],
            email = request.POST['registered_email'],
            password = pw_hash
        )
    except:
        messages.error(request, "You can't use that email address.")
        return redirect("/")
        
    request.session['user_id'] = created_user.id

    return redirect('/books')

# Functions for handling login
def login_user(request):
    user_list = Users.objects.filter(email=request.POST['login_email'])
    if len(user_list) == 0:
        messages.error(request, "Please check your email/password")
        return redirect("/")

    if not bcrypt.checkpw(request.POST['login_password'].encode(), user_list[0].password.encode()):
        print("failed password")
        messages.error(request, "Please check your email/password")
        return redirect("/")

    request.session['user_id'] = user_list[0].id
    return redirect("/books")

def logout(request):
    request.session.clear()
    return redirect("/")

# Functions to handle books
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
    