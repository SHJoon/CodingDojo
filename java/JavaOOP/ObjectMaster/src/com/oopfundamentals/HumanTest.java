package com.oopfundamentals;

public class HumanTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Human h1 = new Human();
		Human h2 = new Human();
		
		h2.displayHealth();
		h1.attack(h2);
		h2.displayHealth();
	}

}
