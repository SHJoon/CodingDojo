/**
 * @param {number} num1 an integer
 * @param {number} num2 an integer
 * @return {number} an integer
 * remember finding a common denominator for fraction addition/subtraction?
 */

 function lcm(num1, num2) {
    var newNum = num1;
    while(true){
        if(newNum % num2 == 0){
            return newNum;
        }
        else{
            newNum += num1;
        }
    }
 }

 function lowestCommonMultiple(num1, num2, base1 = num1, base2 = num2) {
    // your code here
   if(num1 == num2) return num1;

   if(num1 > num2){
       return lowestCommonMultiple(num1, num2 + base2, base1, base2);
   }

   return lowestCommonMultiple(num1 + base1, num2, base1, base2);
}


function lowestCommonMultiple(num1, num2) {
    // your code here
   if ((typeof num1 !== 'number') || (typeof num2 !== 'number'))
    return false;
  return Math.abs((num1 * num2) / greatestCommonFactor(num1, num2));
}

function greatestCommonFactor(num1, num2) {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  // base-case
  // Check if num1 is multiple of num2
  if(num2 == 0){
      return num1;
    }

            //recursive call       ( forward movement)
  return greatestCommonFactor(num2, num1 % num2);
}
// while(num2){
//   var t = num2;
//   num2 = num1 % num2;
//   num1 = t;
// }
// return num1;

// (num1=3, num2=4)

// greatestCommonDenominator(num1 = 4, num2 = 3)
// greatestCommonDenominator(num1 = 3, num2 = 1)
// greatestCommonDenominator(num1 = 1, num2 = 0)


  
  console.log(lowestCommonMultiple(3, 4)); // should log 12
  console.log(lowestCommonMultiple(4, 6)); // should log 12
  
  







  /**
   * @param {string} str a string consisting of any number of these characters: 0, 1, ?
   * @param {string[]} solutions an array of "expanded" strings (default value is empty)
   * @param {string} partial a "partial" solution string
   * @return {string[]} the array of solutions
   * with every `?` replaced by both a 0 and a 1
   * NOTE: the order of the solutions in the output array DOES NOT MATTER
   */
  
  function binaryStringExpansion(str, solutions = [], partial = '') {
    // your code here

  }
  
  // 'something'.indexOf('m') returns 2
  // 'something'.indexOf('b') returns -1 since it's not in the string
  // 'something'.slice(2) returns a new string: 'mething'
  // 'something'.slice(2, 5) returns a new string: 'met'
  
  console.log(binaryStringExpansion('001?0'));
  // should log ['00100', '00110']
  
  console.log(binaryStringExpansion('001?0?'));
  // should log ['001000', '001001', '001100', '001101']

  function stringAnagrams(str, anagrams = [], partial = ''){
      if(str.length == 0){
          if(partial.length != 0){
              anagrams.push(partial);
          }
      }
      else{
          for(var i = 0; i < str.length; i++){
              var char = str[i];
              var newStr = str.slice(0,i) + str.slice(i+1);
              var newPartial = partial + char;

              stringAnagrams(newStr, anagrams, newPartial)
          }
      }
  }