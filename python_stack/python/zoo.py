class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_lion(self, name):
        self.animals.append( Lion(name) )

    def add_hippo(self, name):
        self.animals.append( Hippo(name) )
    
    def add_zebra(self, name):
        self.animals.append( Zebra(name) 
        )
    
    def add_giraffe(self, name):
        self.animals.append( Giraffe(name) 
        )
    
    def feed(self):
        print("Feeding all animals!")
    
    def clean(self):
        print("Cleaning the zoo...")

    def print_all_info(self):
        print("-"*30, self.name, "-"*30)
        for animal in self.animals:
            animal.display_info()

class Lion(Zoo):
    def __init__(self, name):
        self.name = name
    
    def feed(self):
        print(f"{self.name} is eating meat!")
    
    def display_info(self):
        print(f"{self.name}: Lion, carnivore")
    
    def clean(self):
        super().clean()

class Hippo(Zoo):
    def __init__(self, name):
        self.name = name

    def feed(self):
        print(f"{self.name} is eating plants!")
    
    def display_info(self):
        print(f"{self.name}: Hippopotamus, herbivore")
    
    def clean(self):
        super().clean()

class Zebra(Zoo):
    def __init__(self, name):
        self.name = name
    
    def feed(self):
        print(f"{self.name} is eating plants!")
    
    def display_info(self):
        print(f"{self.name}: Zebra, herbivore")
    
    def clean(self):
        super().clean()

class Giraffe(Zoo):
    def __init__(self, name):
        self.name = name
    
    def feed(self):
        print(f"{self.name} is eating tree leaves!")
    
    def display_info(self):
        print(f"{self.name}: Giraffe, herbivore")
    
    def clean(self):
        super().clean()


zoo1 = Zoo("Howard's Zoo")
zoo1.add_lion("Alex")
zoo1.add_hippo("Gloria")
zoo1.add_zebra("Marty")
zoo1.add_giraffe("Melman")
zoo1.add_lion("Simba")
zoo1.print_all_info()
zoo1.feed()
zoo1.animals[0].feed()
zoo1.animals[2].feed()
zoo1.clean()
zoo1.animals[1].clean()