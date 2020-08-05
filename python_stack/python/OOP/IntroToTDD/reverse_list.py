import unittest

def reverseList(lst):
    for i in range(len(lst)//2):
        temp = lst[i]
        lst[i] = lst[len(lst) - 1 - i]
        lst[len(lst) - 1 - i] = temp
    return lst

class isReversed(unittest.TestCase):
    def testOne(self):
        self.assertEqual( reverseList([1,3,5]), [5,3,1])
    
    def testTwo(self):
        self.assertEqual( reverseList([1,2,4,5]), [5,4,2,1])
    
    def testThree(self):
        self.assertEqual( reverseList([10,2,-5,1,75]), [75,1,-5,2,10])
    
    def testFour(self):
        self.assertEqual( reverseList([1,5,5,5,5,1]), [1,5,5,5,5,1])

    def setUp(self):
        # add the setUp tasks
        print("running setUp")

    # any task you want run after the tests are executed, put them in the tearDown method
    def tearDown(self):
        # add the tearDown tasks
        print("running tearDown tasks")

if __name__ == '__main__':
    unittest.main() # this runs our tests
