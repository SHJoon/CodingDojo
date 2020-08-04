/**
 * @param {String} str
 * @return {Boolean} Are the parentheses valid?
 */

// function parensValid(str) {
//     // your code here
//     '(' = open_count++

//     ')' = close_count++
//     // Problem is the following doesn't work
//     ')(' // -> still gonna show balanced, when it's not


//     // example
//     '())('
//     open_count = 0 -> 1
//     close_count = 0 -> 1 -> 2

//     // =--------------------------------------------------------
//     score = 0

//     '(' = score++

//     ')' = score--

//     '(()))'
//     score = 0 -> 1 -> 2 -> 1 -> 0 -> -1


//     ')('
//     score = 0 -> -1 -> return false
//   }

function parensValid(str) {
    var score = 0;

    for (var i = 0; i < str.length; i++) {
      if (str[i] == ')') {
        score--;
      }
      else if (str[i] == '(') {
          score++;
      }
      // If too many closing parenthesis, automatically not balanced
      if (score < 0) {
          return false;
      }
    }

    if (score == 0){
        return true;
    }
    // if score > 0, too many open parenthesis
    else{
        return false;
    }
}
// '()()())' -> score = 1
//   console.log(parensValid('())('))
  console.log(parensValid('(()))')); // should log false
  console.log(parensValid('((some)a)')); // should log true
  console.log(parensValid(')(')); // should log false
  console.log(parensValid('()()')); // should log true
  
  



  /**
   * @param {String} str
   * @return {Boolean} Are the braces valid?
   */
  
//   function bracesValid(str) {
//     // your code here
//     '{[()]}'
//     var open_braces = []
//     if the letter is '(', '{', or '[', push to the open_braces array.
//     if else, compare with the last element of the open_braces array and pop the last element.
//     open_braces = [] -> ['{'] -> ['{','['] -> ['{','[','('] -> ['{','['] -> ['{'] -> []

//     '{[()}]'  
//     open_braces = [] -> ['{'] -> ['{','['] -> ['{','[','('] -> ['{','['] -> return false
//   }
function bracesValid(str) {
    var open_braces = [];
    for (var i = 0; i < str.length; i++){
        if(str[i] == '(' || str[i] == '{' || str[i] == '['){
            open_braces.push(str[i]);
        }
        else if (str[i] == ')' || str[i] == '}' || str[i] == ']'){
            if((str[i] == ')' && open_braces[open_braces.length-1] == '(')
            || (str[i] == ']' && open_braces[open_braces.length-1] == '[')
            || (str[i] == '}' && open_braces[open_braces.length-1] == '{')){
                open_braces.pop();
            }
            else{
                return false;
            }
        }
    }
    return true
}
  console.log(bracesValid('{[()]}')); // should log true
  console.log(bracesValid('{[()}]')); // should log false
  console.log(bracesValid('{[a()b]c}')); // should log true
  console.log(bracesValid('{}[]()[(])')); // should log false

//   bracesValid('([)]')
// if current letter is opening braces, push that to the open_braces array
    // else if current letter is closing braces, compare with the last element of the array
    //     -> if true, pop the last element
    //     -> if false, return false

    // '{[()}]'                                           //')'        // '}'
    // open_brace = [] -> ['{'] -> ['{','['] -> ['{','[','('] -> ['{','[']

function bracesValid(str){
    var open_braces = [];
    for(var i = 0; i < str.length; i++){
        // if str[i] is opening bracket, add it to the open_braces array
        if(str[i] == '(' || str[i] == '{' || str[i] == '['){
            open_braces.push(str[i]);
        }
        // else if it's a closing bracket,
        else if(str[i] == ')' || str[i] == '}' || str[i] == ']'){
            // Check if last element of open_braces array matches with str[i]
            if((str[i] == ')' && open_braces[open_braces.length-1] == '(')
            || (str[i] == ']' && open_braces[open_braces.length-1] == '[')
            || (str[i] == '}' && open_braces[open_braces.length-1] == '{')){
                // if they do match, the bracket is checked and we can move onto next letter
                open_braces.pop();
            }
            // if the last element and str[i] does not match, brackets are imbalanced
            else{
                return false;
            }
        }
    }
    // if open_braces array still contains something, it means there's an extra open bracket, meaning it's imbalanced
    return open_braces.length == 0;
}

'()[]{}'
'([])'