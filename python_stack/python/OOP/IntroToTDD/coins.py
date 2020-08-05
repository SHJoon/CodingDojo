import unittest

def coin(amount):
    quarters = dimes = nickels = pennies = 0
    quarters = amount // 25
    amount -= quarters * 25
    dimes = amount // 10
    amount -= dimes * 10
    nickels = amount // 5
    amount -= nickels * 5
    pennies = amount
    return [quarters, dimes, nickels, pennies]

class isReversed(unittest.TestCase):
    def testOne(self):
        self.assertEqual( coin(87), [3,1,0,2])
    
    def testTwo(self):
        self.assertEqual( coin(99), [3,2,0,4])
    
    def testThree(self):
        self.assertEqual( coin(56), [2,0,1,1])
    
    def testFour(self):
        self.assertEqual( coin(67), [2,1,1,2])
        
    def testFive(self):
        self.assertEqual( coin(19), [0,1,1,4])
    
    def testSix(self):
        self.assertEqual( coin(50), [2,0,0,0])

    def setUp(self):
        # add the setUp tasks
        print("running setUp")

    # any task you want run after the tests are executed, put them in the tearDown method
    def tearDown(self):
        # add the tearDown tasks
        print("running tearDown tasks")

if __name__ == '__main__':
    unittest.main() # this runs our tests
