package com.oopfundamentals;

public class Human {
	private int strength = 3;
	private int stealth = 3;
	private int intelligence = 3;
	private int health = 100;
	
	public void attack(Human h) {
		h.health -= strength;
	}
	
	public void displayHealth() {
		System.out.println(health);
	}
}
