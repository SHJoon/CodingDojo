package com.oopfundamentals;

public class Samurai extends Human {
	protected int health = 200;
	public static int samuraiCount = 0;
	
	public Samurai() {
		samuraiCount++;
	}
	
	public void deathBlow(Human h) {
		h.health = 0;
		health = health / 2;
	}
	
	public void meditate() {
		health = 200;
	}
	
	public int howMany() {
		return samuraiCount;
	}
	
	public void displayHealth() {
		System.out.println(health);
	}
}
