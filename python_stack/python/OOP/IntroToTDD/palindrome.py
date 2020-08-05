import unittest

def isPalindrome(str):
    for i in range(len(str)//2):
        if not(str[i] == str[len(str) - 1 - i]):
            return False
    return True

class isReversed(unittest.TestCase):
    def testOne(self):
        self.assertTrue(isPalindrome("racecar"))
    
    def testTwo(self):
        self.assertTrue(isPalindrome("abcddcba"))
    
    def testThree(self):
        self.assertFalse(isPalindrome("rabcr"))
    
    def testFour(self):
        self.assertFalse(isPalindrome("abcdecba"))
    
    def testFive(self):
        self.assertTrue(isPalindrome("civic"))
    
    def testSix(self):
        self.assertTrue(isPalindrome("stats"))

    def testSeven(self):
        self.assertFalse(isPalindrome("python"))

    def setUp(self):
        # add the setUp tasks
        print("running setUp")

    # any task you want run after the tests are executed, put them in the tearDown method
    def tearDown(self):
        # add the tearDown tasks
        print("running tearDown tasks")

if __name__ == '__main__':
    unittest.main() # this runs our tests
