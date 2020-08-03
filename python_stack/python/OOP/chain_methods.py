class User:
    def __init__(self, name):
        self.username = name
        self.money = 0
    
    def make_deposit(self, amount):
        self.money += amount

        return self
    
    def make_withdrawl(self, amount):
        if amount > self.money:
            print("You don't have enough money!")
            self.display_user_balance()
            return self

        self.money -= amount

        return self

    def display_user_balance(self):
        print(f"{self.username}'s Balance: {self.money}")

        return self
    
    def transfer_money(self, other_user, amount):
        if amount > self.money:
            print("You don't have enough money!")
            self.display_user_balance()
            return self
        
        self.money -= amount
        other_user.money += amount
        print(f"{self.username} has given {other_user.username} {amount} credit")

        return self


howard = User("Howard")
sadie = User("Sadie")
morley = User("Morley")


howard.display_user_balance().make_deposit(200).make_deposit(1000).make_deposit(700)

howard.make_withdrawl(2000).make_withdrawl(1500).display_user_balance()


sadie.make_deposit(1234).make_deposit(4321).make_withdrawl(201).make_withdrawl(1000).display_user_balance()


morley.make_deposit(5000).make_deposit(1000).make_withdrawl(3000).make_withdrawl(3000).display_user_balance()


howard.transfer_money(sadie, 200).display_user_balance()
sadie.display_user_balance()
