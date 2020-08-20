from django.shortcuts import render, redirect
from django.contrib import messages

from .models import Users, Messages, Comments
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

    return redirect('/')

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
    return redirect("/the_wall")

def logout(request):
    request.session.clear()
    return redirect("/")

# Functions for the wall
def index(request):
    if 'user_id' not in request.session:
        messages.error(request, "You must be logged in to view that page.")
        return redirect("/")
    
    context={
        "user": Users.objects.get(id=request.session['user_id']),
        "all_messages": Messages.objects.all(),
    }

    return render(request, 'index.html', context)

def create_message(request):
    logged_in_user = Users.objects.get(id=request.session['user_id'])
    Messages.objects.create(
        message = request.POST['new_message'],
        user = logged_in_user
    )

    return redirect("/the_wall")

def create_comment(request):
    logged_in_user = Users.objects.get(id=request.session['user_id'])
    Comments.objects.create(
        comment = request.POST['new_comment'],
        user = logged_in_user,
        message = Messages.objects.get(id=request.POST['msg_id'])
    )

    return redirect("/the_wall")

def delete_comment(request, cmt_id):
    Comments.objects.get(id=cmt_id).delete()

    return redirect("/the_wall")