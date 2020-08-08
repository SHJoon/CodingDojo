from django.shortcuts import render, redirect
import random

# index function initiates the gold count, activity log, and renders our html file
def index(request):
    if "gold" not in request.session:
        request.session["gold"] = 0
        request.session["history"] = []
    
    return render(request, "index.html")

# process_gold function calculates how much gold is earned
# Additionally, it determines the color of our activity log
def process_money(request):
    # Each buttons in html are named accordingly.
    # We can find which button was pressed by looking at POST request.
    earned_gold = 0

    if "farm" in request.POST:
        # request.session["color"] = "green"
        earned_gold = random.randint(10,20)
        request.session["gold"] += earned_gold
    elif "cave" in request.POST:
        # request.session["color"] = "green"
        earned_gold = random.randint(5,10)
        request.session["gold"] += earned_gold
    elif "house" in request.POST:
        # request.session["color"] = "green"
        earned_gold = random.randint(2,5)
        request.session["gold"] += earned_gold
    # Extra if statements to check if the payout is positive, negative, or 0
    elif "casino" in request.POST:
        earned_gold = random.randint(-50,50)

        # if earned_gold > 0:
        #     request.session["color"] = "green"
        # elif earned_gold < 0:
        #     request.session["color"] = "red"
        # else:
        #     request.session["color"] = "black"

        request.session["gold"] += earned_gold
    
    request.session["history"].append(earned_gold)
    
    return redirect("/")

def reset(request):
    request.session.clear()

    return redirect("/")