
public class BankAccountTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BankAccount acnt = new BankAccount();
		BankAccount acnt2 = new BankAccount();
		
		acnt.addChecking(50.12);
		acnt.addSavings(10);
		acnt.withdrawChecking(50.13);
		acnt.withdrawChecking(40);
		acnt.checkBalance();
	}

}
