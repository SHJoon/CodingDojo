from django.shortcuts import render, redirect
import random

# Create your views here.
def index(request):
    if "randInt" not in request.session:
        request.session["randInt"] = random.randint(0,100)
    
    if "phrase" not in request.session:
        request.session["phrase"] = "Take a guess!"
    
    if "color" not in request.session:
        request.session["color"] = "blue"
    
    if "count" not in request.session:
        request.session["count"] = 0
    
    print(request.session["randInt"])
    
    return render(request, "index.html")

def process_form(request):
    request.session["count"] += 1

    if request.session["randInt"] < int(request.POST["number"]):
        request.session["phrase"] = "Too high!"
        request.session["color"] = "red"
    elif request.session["randInt"] > int(request.POST["number"]):
        request.session["phrase"] = "Too low!"
        request.session["color"] = "red"
    else:
        request.session["phrase"] = f"{request.session['randInt']} was the number!"
        request.session["color"] = "green"

    return redirect("/")

def reset_session(request):
    request.session.clear()

    return redirect("/")