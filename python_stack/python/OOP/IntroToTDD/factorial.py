import unittest

def factorial(num):
    if num == 1 or num == 0:
        return num
    else: return num * factorial(num - 1)

class isReversed(unittest.TestCase):
    def testOne(self):
        self.assertEqual(factorial(5), 120)
    
    def testTwo(self):
        self.assertEqual(factorial(7), 5040)
    
    def testThree(self):
        self.assertEqual(factorial(1), 1)
    
    def testFour(self):
        self.assertEqual(factorial(3), 6)

    def setUp(self):
        # add the setUp tasks
        print("running setUp")

    # any task you want run after the tests are executed, put them in the tearDown method
    def tearDown(self):
        # add the tearDown tasks
        print("running tearDown tasks")

if __name__ == '__main__':
    unittest.main() # this runs our tests
