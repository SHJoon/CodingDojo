from django.shortcuts import render, redirect
from .models import Dojo, Ninja

# Create your views here.
def index(request):
    context={
        "all_dojos": Dojo.objects.all(),
    }
    return render(request, "index.html", context)

def add_dojo(request):
    Dojo.objects.create(
        name = request.POST["name"],
        city = request.POST["city"],
        state = request.POST["state"],
    )
    return redirect("/")

def add_ninja(request):
    Ninja.objects.create(
        first_name = request.POST["first_name"],
        last_name = request.POST["last_name"],
        dojo_id = Dojo.objects.get(id=request.POST["dojo-name"]),
    )
    return redirect("/")

def delete(request):
    Dojo.objects.get(id=request.POST["delete"]).delete()

    return redirect("/")