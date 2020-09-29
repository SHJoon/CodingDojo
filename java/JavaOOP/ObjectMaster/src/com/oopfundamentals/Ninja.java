package com.oopfundamentals;

public class Ninja extends Human {
	private int stealth = 10;
	
	public void steal(Human h) {
		h.health -= stealth;
		health += stealth;
	}
	
	public void runAway() {
		health -= 10;
	}
}
