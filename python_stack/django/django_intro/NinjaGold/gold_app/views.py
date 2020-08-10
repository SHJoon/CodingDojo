from django.shortcuts import render, redirect
import random
from time import gmtime, strftime

# index function initiates the gold count, activity log, and renders our html file
def index(request):
    if "gold" not in request.session:
        request.session["gold"] = 0
        # request.session["gold_history"] = []
        # request.session["location_history"] = []
        request.session["full_str"] = ""
        request.session["str_history"]= []
        request.session["text_color"] = ""
        request.session["color_history"] = []
    # if "date_time" not in request.session:
        request.session["date_time"] = "" # temporary variable to be replaced everytime the process money function is run 
    # if "time_stamp" not in request.session:
        request.session["time_stamp"] = [] # list to store date_time history
    # print('request.session["time_stamp"]:',request.session["time_stamp"],'; request.session["date_time"]: ',request.session["date_time"])
    return render(request, "index.html")
    

# process_gold function calculates how much gold is earned
# Additionally, it determines the color of our activity log
def process_money(request, location):
    # Each buttons in html are named accordingly.
    # We can find which button was pressed by looking at POST request.
    earned_gold = 0
    request.session["date_time"] = strftime("%Y/%m/%d %I:%M %p", gmtime())
    # print('request.session["date_time"]: ',request.session["date_time"])
   
   # the 3 conditions below are set so that the user can play the game without setting condition if they choose to
    if "count" not in request.session:
        request.session['count'] = 0

    if "time_stamp" not in request.session:
        request.session["time_stamp"] = []

    if "win_game" not in request.session:
        request.session["win_game"] = "Unknown"

    # if "location_history" not in request.session:
    #     request.session["location_history"] = []

    # to set for the case when the player didn't yet clicked on "confirm winning condition"
    if "player_desired_gold" not in request.session:
        request.session["player_desired_gold"] = 0
    
    if "num_of_move" not in request.session:
        request.session["num_of_move"] = 0

    # to process information depending on which button was clicked in the 4 choices
    if location == "farm":
        earned_gold = random.randint(10,20)  
        
    elif location == "cave":
        earned_gold = random.randint(5,10)
        
    elif location == "house":
        earned_gold = random.randint(2,5)
        
    elif location == "casino":
        earned_gold = random.randint(-50,50)
   
    request.session['count'] +=1
    request.session["gold"] += earned_gold
    
    # set a full string for each line to display in the activity log
    if earned_gold > 0:
        request.session["full_str"] = 'Earned ' + str(earned_gold)+' golds from the '+location+'! '+'('+request.session["date_time"]+')'
        request.session["text_color"] = "green"
    if earned_gold == 0:
        request.session["full_str"] = 'Earned ' + str(earned_gold)+' golds from the '+location+'! '+'('+request.session["date_time"]+')'
        request.session["text_color"] = "black"
    elif earned_gold < 0:
        request.session["full_str"] = 'Entered a casino and lost '+str(earned_gold)+' golds... Ouch..! '+'('+request.session["date_time"]+')'
        request.session["text_color"] = "red"
    
    #add value to list of full_string and text_color to iterate through in the Index.html file
    # request.session["time_stamp"].append(request.session["date_time"])
    # request.session["gold_history"].append(earned_gold)
    # request.session["location_history"].append(location)
    request.session["str_history"].append(request.session["full_str"])
    request.session["color_history"].append(request.session["text_color"])
    
    
    

    if request.session['count'] == int(request.session["num_of_move"]) and request.session["gold"] >= int(request.session["player_desired_gold"]):
        request.session["win_game"] = "True"
        return redirect("/")
    if request.session['count'] == int(request.session["num_of_move"]) and request.session["gold"] < int(request.session["player_desired_gold"]):
        request.session["win_game"] = "False"
        return redirect("/")
    
    # print('request.session["win_game"]: ',request.session["win_game"],", request.session['count']: ",request.session['count'],'; request.session["num_of_move"]: ',request.session["num_of_move"])
    # print('request.session["player_desired_gold"]:',request.session["player_desired_gold"],'; request.session["gold"]: ',request.session["gold"])
    print('request.session["gold"]: ', request.session["gold"])
    print('request.session["date_time"]: ',request.session["date_time"])
    print("location:", location)
    print('request.session["full_str"]: ',request.session["full_str"])
    print('request.session["str_history"]: ',request.session["str_history"])
    print('request.session["color_history"]: ',request.session["color_history"], ', request.session["text_color"]: ',request.session["text_color"])
    
    return redirect("/")

def reset(request):
    request.session.clear()

    return redirect("/")


def set_condition(request):
    request.session.clear() # to clear history of desired gold before each new game
    request.session["win_game"] = "Unknown"
    request.session['count'] = 0 # to reset the count before each new game
    request.session["gold"] = 0 # to reset the amount of gold earn before each new game
    request.session["full_str"] = ""
    request.session["str_history"]=[]
    request.session["text_color"] =""
    request.session["color_history"] = []
    


    # if the player clicked on "confirm winning condition" without giving any input
    #then set winning condition = 0; 
    if "player_desired_gold" not in request.POST:
        request.session["player_desired_gold"] = 0
    if "num_of_move" not in request.POST:
        request.session["num_of_move"] = 0
    
    # set winning condition to be what the player set
    request.session["num_of_move"] = request.POST["num_of_move"]
    request.session["player_desired_gold"] = request.POST["desired_gold"]

    print('request.session["win_game"]: ',request.session["win_game"],'; request.session["count"]:',request.session['count'])
    
    return redirect("/")