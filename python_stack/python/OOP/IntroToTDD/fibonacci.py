import unittest

def fibonacci(num):
    if num <= 1:
        return num
    
    return fibonacci(num - 1) + fibonacci(num - 2)

class isReversed(unittest.TestCase):
    def testOne(self):
        self.assertEqual(fibonacci(10), 55)
    
    def testTwo(self):
        self.assertEqual(fibonacci(1), 1)
    
    def testThree(self):
        self.assertEqual(fibonacci(13), 233)
    
    def testFour(self):
        self.assertEqual(fibonacci(5), 5)
        
    def testFive(self):
        self.assertEqual(fibonacci(8), 21)
    
    def testSix(self):
        self.assertEqual(fibonacci(4), 3)

    def setUp(self):
        # add the setUp tasks
        print("running setUp")

    # any task you want run after the tests are executed, put them in the tearDown method
    def tearDown(self):
        # add the tearDown tasks
        print("running tearDown tasks")

if __name__ == '__main__':
    unittest.main() # this runs our tests
