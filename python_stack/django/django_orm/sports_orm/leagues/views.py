from django.shortcuts import render, redirect
from django.db.models import Q, Count
from .models import League, Team, Player

from . import team_maker

def index(request):
	# Team.objects.annotate(num_players=Count('all_players'))
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
		"alexander_wyatts": Player.objects.filter(Q(first_name__exact="Alexander") | Q(first_name__exact="Wyatt")),
		"atlantic_teams": Team.objects.filter(league__name__exact="Atlantic Soccer Conference"),
		"penguins_players": Player.objects.filter(curr_team__location__exact="Boston", curr_team__team_name__exact="Penguins"),
		"inter_colleg_baseb_confs": Player.objects.filter(curr_team__league__name__exact="International Collegiate Baseball Conference"),
		"lopez_players": Player.objects.filter(last_name__exact="Lopez", curr_team__league__name__exact="American Conference of Amateur Football"),
		"football_players": Player.objects.filter(curr_team__league__sport__contains="football"),
		"sophia_teams": Team.objects.filter(curr_players__first_name__exact="Sophia"),
		"sophia_leagues": League.objects.filter(teams__curr_players__first_name__exact="Sophia"),
		"flores_players": Player.objects.filter(last_name__exact="Flores").exclude(curr_team__location__exact="Washington",curr_team__team_name__exact="Roughriders"),
		"samuel_evans_teams": Team.objects.filter(all_players__first_name__exact="Samuel", all_players__last_name__exact="Evans"),
		"tiger_cats_players": Player.objects.filter(all_teams__location__exact="Manitoba",all_teams__team_name__exact="Tiger-Cats"),
		"vikings_players": Player.objects.filter(all_teams__location__exact="Wichita",all_teams__team_name__exact="Vikings").exclude(curr_team__location__exact="Wichita",curr_team__team_name__exact="Vikings"),
		"jacob_gray_teams": Team.objects.filter(all_players__first_name__exact="Jacob",all_players__last_name__exact="Gray").exclude(location__exact="Oregon", team_name__exact="Colts"),
		"amateur_baseball_joshuas": Player.objects.filter(all_teams__league__name__exact="Atlantic Federation of Amateur Baseball Players", first_name__exact="Joshua"),
		"12_or_mores": Team.objects.annotate(num_players=Count('all_players')).filter(num_players__gte=12),
		"all_players": Player.objects.annotate(num_teams=Count('all_teams')).order_by("num_teams")
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")