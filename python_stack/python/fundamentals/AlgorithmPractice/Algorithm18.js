/**
 * @param {number} num an integer
 * @return {number} a ONE-DIGIT integer
 * sum all the digits until the answer has only ONE DIGIT
 */

function rSumToOneDigit(num) {
    // base case
    if (num.toString().length == 1){
        return num;
    }
    var sum = 0;
    for (var i = 0; i < num.toString().length; i++){
        sum += parseInt(num.toString()[i]);
    }
    return rSumToOneDigit(sum);
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
    var startP = 0, endP = startP + 2;
    for (var i = 1; i < str.length; i++ ){
      partial = str.slice(i,i+2);
      
    }
    var remainder = str.slice(2);
    anagrams[0] = partial[1] + partial[0] + remainder; //im
    anagrams[1] = partial[0] + partial[1] + remainder; //mi
    return anagrams;
  }
  
  // 'something'.slice(2, 4) returns a new string 'me'
  // 'something' + 'else' returns a new string 'somethingelse'
  
  console.log(stringAnagrams('mi'));
  // should log ['mi', 'im'] or ['im', 'mi']
  
  console.log(stringAnagrams('mil'));
  // should log ['mil', 'mli', 'iml', 'ilm', 'lim', 'lmi']
  //             123     132    213    231    321    312
  // 1234
  // 1234  1243  1324  1423 2134 2143 4123 
  // milk
  // str.slice(2) -> lk
  //str.slice(0,2);
  // 4!
  // 4 x 3 x 2 x 1
  // mi, lk
  //anagrams = ["imlk", "milk"]
  
function stringAnagrams(str, anagrams = [], partial = ''){
    for(var i = 0; i < partial.length; i++){
        
    }
}