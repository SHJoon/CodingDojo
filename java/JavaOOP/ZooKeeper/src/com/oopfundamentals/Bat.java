package com.oopfundamentals;

public class Bat extends Mammal {
	public int energylevel = 300;
	
	public void fly() {
		System.out.println("Woosh");
		this.energylevel -= 50;
	}
	
	public void eatHumans() {
		this.energylevel += 25;
	}
	
	public void attackTown() {
		System.out.println("The town is burning");
		this.energylevel -= 100;
	}
}
