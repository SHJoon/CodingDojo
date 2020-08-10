/**
 * takes in a string
 * returns an object
 * with characters as keys
 * and the number of occurrences as values
 * 
 * how to determine if property is in object:
 * var obj = { someProp: 'some val' }
 * obj.hasOwnProperty('someProp') returns true
 */

// set a key/value pair

// var obj = {}

obj['secondKey'] = 'second val'

// get a value from an object
obj['secondKey'] // returns 'second val'



function freqTable(str) {
    // Create an empty object to store our counts frequency
    // Create a for loop  
    //   if str[i] DOES exist, then just increment the value
    //   if str[i] doesn't exist in obj, create a key-value pair in there

    // if obj.hasOwnProperty('someProp') returns true
    // Above means 'someProp' DOES exist inside obj
    // if obj.hasOwnProperty('someProp') returns false
    // Then 'someProp' does NOT exist inside obj

    // if (false){
    //     do this
    // }
    // else if (false){ do this }
    var obj = {};
    // obj['a'] == 1
    // obj['c'] == 3
    for (var i=0; i<str.length; i++){
        if(obj.hasOwnProperty(str[i])){
            obj[str[i]] += 1;
        }
        else{
            // create a key-value pair in there
            // obj['abd'] = 'abc'
            obj[str[i]] = 1;
        }
    }
    return obj

}

console.log(freqTable('abac')); // logs { a: 2, b: 1, c: 1 }
console.log(freqTable('deffd')); // logs { d: 2, e: 1, f: 2 }












/**
 * takes in a string
 * returns a string
 * with the "words" reversed
 *
 
 Pseudocode:
 1.  Loop thru the string starting from the end to the first character.
 2.  Mark the start and end pointers.  The idea is to keep these two markers move thru the string.
 3.  Check if the string at element[i] is a blank.
     If so, then copy the string from that "start" to the "end".
    
 4. When you reach the first element, then add the first word to the result.
     
*/
reverseWordOrder('this statement is true')

'true' 'is' 'statement' 'this'



function reverseWordOrder(str) {
  // your code here
  var result = '';
  
  var end = str.length -1;
  var start = str.length -1;
  
  for (i=str.length-1; i>= 0; i--) {
    

    if  (str[i] == ' ')  {
        result += str.substring(start, end + 1 ) + ' ';
        start = i;
        end = i;
    } 
    else  {
        start = i;
    
    }  
    
  }
  result += str.substring(start, end);
  
  return result;
  
}
console.log(reverseWordOrder('this statement'));
// should log 'statement this'
console.log(reverseWordOrder('This is a test'));
 // should log 'test a is This'









 function reverseWordOrder(str){
     strArr = str.split(" ");
     newStr = '';
     for(var i = str.legnth-1; i >0; i--){
        newStr += strArr[i] + ' ';
     }
     return newStr + strArr[0]
 }

 /*  Yeah, I think split would simplify the algorithm  */