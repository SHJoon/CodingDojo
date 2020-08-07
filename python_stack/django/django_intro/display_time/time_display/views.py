from django.shortcuts import render, HttpResponse
from django.http import response
from time import gmtime, strftime, localtime

# Create your views here.
def index(request):
    context = {
        "time": [
            strftime("%m-%d-%Y",localtime()),
            strftime("%a",localtime()),
            strftime("%H:%M:%S %p",localtime())
            ]
    }
    return render(request,'index.html', context)