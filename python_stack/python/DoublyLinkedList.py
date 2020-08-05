class Node:
    def __init__(self, val):
        self.value = val
        self.next = None
        self.prev = None

class DList:
    def __init__(self):
        self.head = None
    
    def add_to_front(self, val):
        new_node = Node(val)
        new_node.next = self.head
        self.head = new_node
        return self
    
    def add_to_back(self, val):
        new_node = Node(val)
        runner = self.head
        while (runner.next != None):
            runner = runner.next
        runner.next = new_node
        new_node.prev = runner
        return self

    def remove_val(self, val):
        runner = self.head
        while (runner != None):
            if (runner.value == val):
                # next_temp = runner.next
                if (runner.next != None):
                    runner.next.prev = runner.prev
                if (runner.prev != None):
                    runner.prev.next = runner.next
            runner = runner.next
        return self

    def insert_at(self, val, n):
        if n == 0:
            self.add_to_front(val)
            return self

        new_node = Node(val)
        count = 1
        runner = self.head
        while (count != n):
            count += 1
            runner = runner.next
        new_node.next = runner.next
        new_node.prev = runner
        runner.next.prev = new_node
        runner.next = new_node
        return self

    def print_values(self):
        runner = self.head
        while (runner != None):
            print(runner.value)
            runner = runner.next
        return self
    
    def print_values_reverse(self):
        runner = self.head
        while (runner.next != None):
            runner = runner.next
        while (runner != None):
            print(runner.value)
            runner = runner.prev
        return self

my_list = DList()
my_list.add_to_front("Wed").add_to_front("Mon").insert_at("Tue",1).add_to_back("Thu").print_values()
my_list.print_values_reverse().add_to_back("Sun").insert_at("Fri",4).insert_at("Sat",5).print_values_reverse()
my_list.print_values_reverse()
my_list.add_to_back("Mon").remove_val("Tue").remove_val("Mon").print_values_reverse()
