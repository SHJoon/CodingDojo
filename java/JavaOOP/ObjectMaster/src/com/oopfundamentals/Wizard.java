package com.oopfundamentals;

public class Wizard extends Human {
	protected int health = 50;
	private int intelligence = 8;
	
	public void heal(Human h) {
		h.health += intelligence;
	}
	
	public void fireball(Human h) {
		h.health -= intelligence * 3;
	}
}
