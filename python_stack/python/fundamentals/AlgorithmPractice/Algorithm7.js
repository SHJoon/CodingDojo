/**
 * @param {String} str
 * @return {String} with only the last instance of each character
 * NOTE: the character order should be preserved
 */

function dedupe(str) {

    var current_string_result='';
    // your code here
    // Loop from the end (We can see the last instance of the character. Any repeated character = we don't care about)
    //      Each iteration, we check if the current character is a repeat or not  
    //   var current_str_result= 'ops!'  loop thru this string
    for(var i = str.length - 1; i >= 0; i--){
        // 'Snaps! crackles! pops!'
        // '!' -> 's' -> 'p' -> 'o' -> 'p' ->...

          // check if the current character is in the current_str_result = 'p!'

        var found = false;  
        for (var j = 0; j < current_string_result.length -1; j++) {
              // Is str[i] in the current_string_result yet?
                // str[i] = 'p'
                // current_string_result = 'ops!'
            if (str[i]== current_string_result[j]) {
                found = true; 
                break;
                }    
            }

        if (found == false)  {
             current_string_result = str[i] +current_string_result;
                //destination      =    'p'             + 'ops!';
                              //    =    'pops!'
        }

    }
    
        return current_string_result;
  }

// str[i] = 'l'
// current_string_result = 'e ops!'
// current_string_result += str[i] -> output: 'e ops!l'
// current_string_result = str[i] + current_string_result; -> output: 'le ops!'
//   str.find(character)
  console.log(dedupe('abac')); // should log 'bac'
  console.log(dedupe('Snaps! crackles! pops!'));
  // should log 'Snrackle ops!'
  





  
  /**
   * @param {String} str
   * @return {String} with individual "words" reversed
   */
  
  function reverseWords(str) {
    var str_result = '';
    var word = '';
    var rev_word = '';

    // To find the individual words
    for(var i = str.length - 1; i >= 0; i--){
      
        if ( (str[i] != ' ') && (i > 0) ) {
            word = str[i] + word;
          
        } 
        
        // found a word already
        else {
            if (i == 0) {
              word = str[i] + word;
            }
          
            // word = 'this'   rev_word = "siht"
            rev_word = '';
            // To reverse each word, and to add the string to the result 
            for (var j=word.length-1; j>= 0; j--) {
                rev_word = rev_word + word[j] ;
            }
            
            if  (i > 0) {
                str_result  = ' ' + rev_word + str_result; 
            }
            else {
                str_result  =  rev_word + str_result; 
            
              
            }
                    
            word = '';        
        }

        
        return str_result   
    }
}
  
  console.log(reverseWords("hello")); // should log 'olleh'
  console.log(reverseWords('this that')); // should log 'siht taht'
                                        // 'taht siht'


                                      