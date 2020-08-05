/**
 * @param {String} str
 * @return {Boolean} Is the string a palindrome?
 * Palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nursesrun.
 */

function isPalindrome(str) {
    // your code here
    // Loop through the string
    //  - To start off, compare first and last index
    //  - Work your way up/down the string

    // 'racecar'
    // str.length == 7
    // i < 3.5
    // i ->... -> 3 -> 4 --> exit the loop
    // 'r', 'r'
    // 'a', 'a'
    // 'c', 'c'
    // 'e'
    for (var i = 0; i < str.length/2; i++){
        if (str[i] != str[str.length-1-i]){
            return false;
        }
    }
    return true;
  }
  
  console.log(isPalindrome('mom')); // should log true
  console.log(isPalindrome('Mom')); // should log false
  console.log(isPalindrome('this')); // should log false
  console.log(isPalindrome('mooom')); // should log true
  
  
  /**
   * @param {String} str
   * @return {String} the longest palindrome in the given string
   */
  
  function longestPalindrome(str) {
    var prevPalindrome = currPalindrome = '';
    // i sets lower bound of the string
    for(var i = 0; i < str.length; i++){
        // j sets the upper bound of the string
        for(var j = str.length; j >= i; j--){
            if(isPalindrome(str.slice(i,j))){
                if(prevPalindrome.length < str.slice(i,j).length){
                    prevPalindrome = str.slice(i,j);
                }
                break;
            }
        }
    }
    return prevPalindrome;
  }
//   ('what up, daddy-o?')
//   i = 2
//   j = 2 -> 3-> ... -> str.length -1
//   str.slice(i,j)
  
  console.log(longestPalindrome('this')); // should log 't'
  console.log(longestPalindrome('bobe')); // should log 'bob'
  console.log(longestPalindrome('what up, daddy-o?')); // should log 'dad'
  console.log(longestPalindrome('Yikes! my favorite racecar erupted!'));
  // should log 'e racecar e'
