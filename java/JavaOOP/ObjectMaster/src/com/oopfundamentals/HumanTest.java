package com.oopfundamentals;

public class HumanTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Human h1 = new Human();
		Human h2 = new Human();
		
		h2.displayHealth();
		h1.attack(h2);
		h2.displayHealth();
		
		Ninja n1 = new Ninja();
		Wizard w1 = new Wizard();
		Samurai s1 = new Samurai();
		Samurai s2 = new Samurai();
		Samurai s3 = new Samurai();
		
		n1.steal(s1);
		n1.displayHealth();
		
		w1.heal(w1);
		w1.displayHealth();
		
		s1.deathBlow(w1);
		s1.meditate();
		s1.displayHealth();
		
		System.out.println(s1.howMany());
	}

}
