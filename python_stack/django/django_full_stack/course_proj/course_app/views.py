from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Course

# Create your views here.
def root(request):
    return redirect("/courses")

def index(request):
    context={
        "all_courses": Course.objects.all()
    }
    return render(request, "index.html", context)

def add_course(request):
    errors = Course.objects.basic_validator(request.POST)
    if errors:
        for _, val in errors.items():
            messages.error(request, val)
        return redirect("/courses")

    Course.objects.create(
        name=request.POST["name"],
        description=request.POST["description"]
    )
    return redirect("/")

def destroy(request, course_id):
    context = {
        "course": Course.objects.get(id=course_id)
    }
    return render(request, "delete.html", context)

def delete(request, course_id):
    course = Course.objects.get(id=course_id)
    course.delete()

    return redirect("/courses")