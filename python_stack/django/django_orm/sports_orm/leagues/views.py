from django.shortcuts import render, redirect
from django.db.models import Q
from .models import League, Team, Player

from . import team_maker

def index(request):
	context = {
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all(),
		"baseball_leagues": League.objects.filter(sport__contains="baseball"),
		"womens_leagues": League.objects.filter(name__contains="Women"),
		"hockey_leagues": League.objects.filter(sport__contains="hockey"),
		"not_football_leagues": League.objects.exclude(sport__contains="football"),
		"conference_leagues": League.objects.filter(name__contains="Conference"),
		"atlantic_leagues": League.objects.filter(name__icontains="atlantic"),
		"dallas_teams": Team.objects.filter(location__exact="Dallas"),
		"raptors_teams": Team.objects.filter(team_name__exact="Raptors"),
		"city_teams": Team.objects.filter(location__contains="City"),
		"t_teams": Team.objects.filter(team_name__startswith="T"),
		"alphabet_teams": Team.objects.all().order_by("location"),
		"reverse_teams": Team.objects.all().order_by("-team_name"),
		"coopers": Player.objects.filter(last_name__exact="Cooper"),
		"joshuas": Player.objects.filter(first_name__exact="Joshua"),
		"coopers_no_joshua": Player.objects.filter(last_name__exact="Cooper").exclude(first_name__exact="Joshua"),
		"alexander_wyatts": Player.objects.filter(Q(first_name__exact="Alexander") | Q(first_name__exact="Wyatt"))

	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")