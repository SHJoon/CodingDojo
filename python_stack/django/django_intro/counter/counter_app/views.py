from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    if "count" not in request.session:
        request.session["count"] = -1
    if "revisit" not in request.session:
        request.session["revisit"] = -1

    request.session["count"] += 1
    request.session["revisit"] += 1

    return render(request, 'index.html')

def destroy(request):
    request.session.clear()
    return redirect("/")

def increment_by_one(request):
    request.session["count"] += 1

    return redirect("/")

def increment(request):
    request.session["count"] += int(request.POST['num']) - 1

    return redirect("/")