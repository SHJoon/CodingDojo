from django.shortcuts import render, redirect
from django.contrib import messages

from .models import User
import bcrypt

# Create your views here.
def index(request):

    return render(request, 'index.html')

def create(request):
    all_errors = User.objects.validator(request.POST)

    if len(all_errors) > 0:
        for key, val in all_errors.items():
            messages.error(request, val)
        return redirect('/')

    password = request.POST['registered_password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    
    created_user = User.objects.create(
        first_name = request.POST['registered_first_name'],
        last_name = request.POST['registered_last_name'],
        email = request.POST['registered_email'],
        password = pw_hash
    )
    request.session['user_id'] = created_user.id

    return redirect('/success')


def success(request):
    if 'user_id' not in request.session:
        messages.error(request, "You must be logged in to view that page.")
        return redirect("/")

    context={ 
        # "user": User.objects.last()
        "user": User.objects.get(id=request.session['user_id'])
    }

    return render(request, 'success.html', context)


def login(request):
    user_list = User.objects.filter(email=request.POST['login_email'])
    if len(user_list) == 0:
        messages.error(request, "Please check your email/password")

    if not bcrypt.checkpw(request.POST['login_password'].encode(), user_list[0].password.encode()):
        print("failed password")
        messages.error(request, "Please check your email/password")
        return redirect("/")

    request.session['user_id'] = user_list[0].id    
    return redirect("/success")


def logout(request):
    request.session.flush()
    return redirect("/")