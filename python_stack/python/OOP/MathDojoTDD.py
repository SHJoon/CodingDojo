import unittest

class MathDojo:
    def __init__(self):
    	self.result = 0

    def add(self, num, *nums):
    	# your code here
        self.result += num
        for n in nums:
            self.result += n
        return self

    def subtract(self, num, *nums):
    	# your code here
        self. result -= num
        for n in nums:
            self.result -= n
        return self

class isReversed(unittest.TestCase):
    def testOne(self):
        print(self.md.result)
        self.assertEqual(self.md.add(2).add(2,5,1).subtract(3,2).result, 5)
    
    def testTwo(self):
        print(self.md.result)
        self.assertEqual(self.md.subtract(5).add(5).add(5,5,2).subtract(1,20).add(1,1,2,3,5).subtract(2,3,10).result, -12)
    
    def testThree(self):
        print(self.md.result)
        self.assertEqual(self.md.add(7).subtract(5).add(15,2,3,4).subtract(19).result, 7)

    def setUp(self):
        # add the setUp tasks
        self.md = MathDojo()

    # any task you want run after the tests are executed, put them in the tearDown method
    def tearDown(self):
        # add the tearDown tasks
        print("running tearDown tasks")

if __name__ == '__main__':
    unittest.main() # this runs our tests