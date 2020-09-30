package com.howardshin.phones;

public class Galaxy extends Phone implements Ringable {
	public Galaxy(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }
    @Override
    public String ring() {
        // your code here
    	return String.format("Galaxy %s says %s", super.getVersionNumber(), super.getRingTone());
    }
    @Override
    public String unlock() {
        // your code here
    	return "Unlocking via fingerprint";
    }
    @Override
    public void displayInfo() {
        // your code here
    	System.out.println(String.format("Galaxy %s from %s", super.getVersionNumber(), super.getCarrier()));
    }
}
