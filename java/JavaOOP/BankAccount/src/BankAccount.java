import java.util.Random;

public class BankAccount {
	private String accountNumber = "";
	private double checking;
	private double savings;
	private static int accountCount = 0;
	private static double totalAmount = 0;
	
	private String makeAccountNumber() {
		Random r = new Random();
		for(int i = 0; i < 10; i++) {
			 accountNumber += Integer.toString(r.nextInt(10));
		}
		return accountNumber;
	}
	
	public BankAccount() {
		makeAccountNumber();
		accountCount++;
	}
	
	public double getChecking() {
		return checking;
	}
	
	public double getSavings() {
		return savings;
	}
	
	public void addChecking(double amount) {
		checking += amount;
		totalAmount += amount;
	}
	
	public void addSavings(double amount) {
		savings += amount;
		totalAmount += amount;
	}
	
	public void withdrawChecking(double amount) {
		if (amount > checking) {
			System.out.println("Not enough funds!");
		}
		else {
			checking -= amount;
		}
	}
	
	public void withdrawSavings(double amount) {
		if (amount > savings) {
			System.out.println("Not enough funds!");
		}
		else {
			savings -= amount;
		}
	}
	
	public void checkBalance() {
		System.out.println(String.format("Checking: %s \nSavings: %s", getChecking(), getSavings()));
	}
}
