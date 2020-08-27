/**
 * @param {number} num an integer
 * @return {number} a ONE-DIGIT integer
 * sum all the digits until the answer has only ONE DIGIT
 */

 function sumToOneDigit(num){
    var sum = 0
    while(sum.toString().length > 1){
        var strNumLen = num.toString().length
        for (var i = 0; i < strNumLen; i++){
        sum += parseInt(strNum[i]);
        }
    }
    return sum;
 }

function rSumToOneDigit(num) {
    // base case
    if (num.toString().length == 1){
        return num
    }
  }
  
  console.log(rSumToOneDigit(19));
  // should log 1: 1 + 9 = 10 -> 1 + 0 = 1
  
  console.log(rSumToOneDigit(999));
  // should log 9: 9 + 9 + 9 = 27 -> 2 + 7 = 9
  
  // base case: to stop the recursion (preventing an infinite loop)
  // recursive call (the function calls itself inside the body)
  // forward movement: bringing us closer to the base case




  
  /**
   * @param {string} str the starting string
   * @param {string[]} anagrams an array of anagrams (default value is empty)
   * @param {string} partial a partial solution (default value is empty)
   * @return {string[]} an array of anagrams made from the original string
   * NOTE: the order of the individual strings inside the
   * returned array is unimportant; just make sure you get them all
   */
  
  function stringAnagrams(str, anagrams = [], partial = '') {
    // your code here
  }
  
  // 'something'.slice(2, 4) returns a new string 'me'
  // 'something' + 'else' returns a new string 'somethingelse'
  
  console.log(stringAnagrams('mi'));
  // should log ['mi', 'im'] or ['im', 'mi']
  
  console.log(stringAnagrams('mil'));
  // should log ['mil', 'mli', 'iml', 'ilm', 'lim', 'lmi']