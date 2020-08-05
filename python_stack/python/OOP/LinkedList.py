class SLNode:
    def __init__(self, value):
        self.value = value
        self.next = None

class SList:
    def __init__(self):
        self.head = None
    
    def add_to_front(self, val):
        new_node = SLNode(val)
        new_node.next = self.head
        self.head = new_node
        return self
    
    def add_to_back(self, val):
        new_node = SLNode(val)
        runner = self.head
        while (runner.next != None):
            runner = runner.next
        runner.next = new_node
        return self
    
    def remove_from_front(self):
       self.head = self.head.next
       return self
    
    def remove_from_back(self):
        runner = self.head
        while (runner.next.next != None):
            runner = runner.next
        runner.next = None
        return self

    def remove_val(self, val):
        if val == self.head.value:
            self.head = self.head.next
            return self

        runner = self.head
        while (runner.next.value != val):
            runner = runner.next
        runner.next = runner.next.next
        return self

    def insert_at(self, val, n):
        if n == 0:
            self.add_to_front(val)
            return self

        new_node = SLNode(val)
        count = 1
        runner = self.head
        while (count != n):
            count += 1
            runner = runner.next
        temp = runner.next
        runner.next = new_node
        new_node.next = temp
        return self

    def print_values(self):
        runner = self.head
        while (runner != None):
            print(runner.value)
            runner = runner.next
        return self

my_list = SList()	# create a new instance of a list
# my_list.add_to_front("are").add_to_front("Linked lists").add_to_back("fun!").print_values()    # chaining, yeah!

my_list.add_to_front("Tues").add_to_front("Mon").add_to_back("Wed").add_to_back("Thu").add_to_back("Fri").add_to_back("Sat").add_to_back("Sun").print_values()
my_list.remove_from_front().remove_from_back().print_values()
my_list.remove_val("Thu").remove_val("Sat").remove_val("Tues").print_values()
my_list.insert_at("Thu", 1).print_values().insert_at("Sat", 3).print_values()
