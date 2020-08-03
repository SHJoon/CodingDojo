class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount

        return self
    
    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        self.balance -= amount

        return self

    def display_account_info(self):
        print(f"Current balance: {self.balance}")

        return self

    def yield_interest(self):
        self.balance += self.balance * self.int_rate

        return self

bank_of_america = BankAccount(0.01, 1000)
chase_bank = BankAccount(0.02, 500)


bank_of_america.deposit(200).deposit(300).deposit(500).withdraw(400).yield_interest().display_account_info()

chase_bank.deposit(750).deposit(120).withdraw(100).withdraw(100).withdraw(200).withdraw(20).yield_interest().display_account_info()