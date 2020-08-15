from django.shortcuts import render, redirect
from .models import Shows

# Create your views here.
def index(request):
    return redirect("/shows")

def new_shows(request):
    return render(request,"add_shows.html")

def create_show(request):
    new_show = Shows.objects.create(
        title=request.POST["title"],
        network=request.POST["network"],
        release_date=request.POST["release_date"],
        description=request.POST["desc"]
    )
    return redirect(f"/shows/{new_show.id}")

def show(request, show_id):
    context={
        "show":Shows.objects.get(id=show_id)
    }

    return render(request, "show.html", context)

def shows(request):
    context={
        "all_shows":Shows.objects.all()
    }
    return render(request,"shows.html", context)

def edit_show(request, show_id):
    show = Shows.objects.get(id=show_id)
    show.release_date = show.release_date.strftime("%Y-%m-%d")
    context={
        "show": show
    }
    return render(request,'edit_show.html', context)

def update_show(request, show_id):
    show = Shows.objects.get(id=show_id)
    show.title = request.POST["title"]
    show.network = request.POST["network"]
    show.release_date = request.POST["release_date"]
    show.description = request.POST["desc"]

    show.save()
    return redirect(f'/shows/{show_id}')

def destroy_show(request, show_id):
    show = Shows.objects.get(id=show_id)
    show.delete()

    return redirect('/shows')