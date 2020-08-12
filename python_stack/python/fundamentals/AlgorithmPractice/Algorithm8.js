/**
 * @param {String} str
 * @return {String} with the original "compressed"
 * if the "compressed" version IS NOT shorter,
 * return the original
 */

 /* Iterate over the string
 Compare the current and next characters
 If both character are not same   */

function encode(str) {
    // your code here
    var output = '';
    var count = 0;
    for (var i = 0; i < str.length; i++){
      count++;
      if (str[i] != str[i+1]) {
        output += str[i] + count;
        count = 0;
      }
    }
    if (output.length < str.length){
      return output;
    }
    return str;
  }

//   str = 'abbbaa'
//   myStr = 'a1b3a2'
//   compare str.length vs myStr.length
//   myObj ={
//     'a': 0,
//     'b': 0
//   }
  console.log(encode('aabbbbbb')); // should log 'a2b6'
  console.log(encode('abbbbbbbbbb')); // should log 'a1b10'
  console.log(encode('abbbaa')); // should log 'abbbaa' rather than 'a1b3a2'
  //                  a1
  //                  a1b1
  //                  a1b1b2
  console.log(encode('abc')); // should log 'abc'
  





  
  
  /**
   * @param {String} str
   * @return {String} with the original "expanded"
   * 
   * parseInt('a') returns NaN
   * parseInt('5') returns 5
   * isNaN('c') returns true
   * isNaN(5) returns false
   */
  
  //   if(isNaN(fre)){
  //       newStr += fre;
  //   }
  function decode(str) {
    var newStr="", freqStr="", currChar = str[0];
    for (var i = 1; i<=str.length; i++){
      // Check if the character is number or not
      if (isNaN(str[i])){
        // If current character is not a number, we look at how many times
        // we have to loop(freqStr) to add the current character (str[i])
        for(var j = 0; j < parseInt(freqStr); j++){
            newStr +=  currChar;
        }
        currChar = str[i];
        freqStr="";
      }
      else {
        // If current character is a number, add the string to the freqStr
        freqStr += str[i];
      }
    }

    return newStr;
  }

  console.log(decode('a2b6c7')); // should log 'aabbbbbbccccccc'
  console.log(decode('a10b10')); // should log 'aaaaaaaaaabbbbbbbbbb'
  // loop 1: newStr = a
  // loop 2: newStr = a, freStr="1"
  // loop 3: newStr = a, freStr="10"
  // loop 4: freStr="10", fre=10, 
  console.log(decode('a1b10c6')); // should log 'abbbbbbbbbbcccccc'

  