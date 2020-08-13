/**
 * @param {String} str
 * @param {Number} num
 * @return {String} a new string with the characters
 * rotated to the left by the given number
 * Note: the number can be greater than the string length
 */

function rotateString(str, num) {
    // your code here
    // Start loop from the end
    //  - loop for given times, and save that little string "dunov"
    //  - Need a way to store the rest of the string "Boris Go"-> "dunov" + "Boris Go" == "dunovBoris Go"
    //  - Therefore, when the index reaches smaller value than our desired range, add it to another variable.
    var backStr = ''
    var frontStr = ''
    var actual_rotation = num % str.length
    for (var i = str.length - 1; i>=0; i--){
        // i = 12 -> 11 -> 10 -> 9 -> 8 ---------> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0
        if (i > str.length - 1 - actual_rotation){
            backStr = str[i] + backStr
        //  backStr = 'v'    +  ''       ->'v'        i = 12
        //  backStr = 'o'    +  'v'      ->'ov'       i = 11
        //  backStr = 'n'    +  'ov'     ->'nov'      i = 10
        //  backStr = 'u'    +  'nov'    ->'unov'     i = 9
        //  backStr = 'd'    +  'unov'   ->'dunov'    i = 8
        }
        else{
            frontStr = str[i] + frontStr
        //  frontStr =  'o'   +    ''   -> 'o'
        //  frontStr =  'G'   +    'o'  -> 'Go'
        //  ...
        }
    }
    return backStr + frontStr
  }
  
  // We take last 5 letters and move it to the front.
  console.log(rotateString('Boris Godunov', 5));
  // should log 'dunovBoris Go'
  
  // If string is smaller than the given number, have to do more rotations to satisfy requirement.
  console.log(rotateString('this', 5));
   'this'.length = 4
   'sthi' -> 'isth' -> 'hist' -> 'this' -> 'sthi'
  // should log 'sthi'
  5 % 4  -> divides, and then returns remainder
  -> remainder = 1
  
  // in reality, the string only rotated 1 time
  
  






  /**
   * @param {String} str1
   * @param {String} str2
   * @return {Boolean} Is the second string a rotation of the first?
   * See if you can optimize once you get it working.
   */
  
  function isRotation(str1, str2) {
    // your code here
    if (str1.length != str2.length){
        return false;
    }
    
    for(var i = 1; i < str1.length; i++){
        if (rotateString(str1, i) == str2){
            return true
        }
    }
    return false
  }
  
  console.log(isRotation('Boris Godunov', 'dunovBoris Go'));
  // should log true
  
  console.log(isRotation('hello world', 'llo worldHe'));
  // should log false
