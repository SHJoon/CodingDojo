/**
 * @param {Array<String>} arr
 * @param {String} separator
 * @return {String} a string connecting all the array
 * elements with the given separator
 */

function join(arr, separator) {
    var arrStr = ""
    for (var i=0; i<arr.length; i++){
      if (i == arr.length - 1){
        arrStr += arr[i]
      }
      else {
      arrStr += arr[i] + separator
      }
    }
    return arrStr
  }
  // create an empty string variable
  // iterate through a loop
  // add each element of the array into the string + separator character
  // return the string 

  console.log(join(['a', 'b', 'c'], '|')); // should log 'a|b|c'
  console.log(join(['a', 'b', 'c', 'd'], '? ')); // should log 'a? b? c? d'
  console.log(join(['a', 'b', 'c'], ',,')); // should log 'a,,b,,c'
  
  
  /**
   * @param {Array<Number>} arr a SORTED array of UNIQUE integers
   * @return {String} a string connecting all the consecutive page
   * ranges with a comma and a space
   */
  
  function bookIndex(arr) {
    // your code here
    
    var myStr = ""; // >"1, 2, 3"  -> .split(", ") -> [1,2,3]
    var firstnum = arr[0];
    var lastnum;
    // iterate through the whole array
    for(var i = 0; i < arr.length; i++){
        if (!(arr[i] + 1 == arr[i+1])){
            //as long as it's true, it won't .push into array/string.
            //if check fails, then push the last value into the array/string.
            lastnum = arr[i];
            // This if statement is for checking for last element (don't add ", " at the end)
            if(i == arr.length -1){
                if(firstnum == lastnum){
                    myStr += firstnum;
                }
                else{
                    myStr += firstnum + "-" + lastnum;
                    firstnum = arr[i + 1];
                }
            }
            else{
                if(firstnum == lastnum){
                    myStr += firstnum + ", "
                    firstnum = arr[i + 1];
                }
                else{
                    myStr += firstnum + "-" + lastnum + ", ";
                    firstnum = arr[i + 1];
                }
            }
            
        }
        // else statement is redundant
        // else{
        //     //skip to next set of consecutive numbers and begin if statement again
        //     //setting new firstnum value to new consecutive string/array
        //     // get rid of now that if statement is compared against not true "(!)"
        // }
    }
    return myStr
  }
  
  console.log(bookIndex([1, 2, 3, 5, 6, 7, 10, 11]));
  console.log(bookIndex([5, 10, 11, 12])); // should log '5, 10-12'
                                            // going to log '5-5, 10-12'
                                            // going to log '5, 10-12, '

//if consecutive, place separator between first and last consecutive number.


  // for loop incrementing by 1
  //   if  (arr[i] +1 == arr[i+1])


// .
//  0th value plus 1 = the 1st value then put it in the string



function bookIndex(arr) {
    var myStr = "";
    var firstnum = arr[0];
    var lastnum;
    for(var i = 0; i < arr.length; i++){
        // if it is not consecutive, (top end of range becomes current index)
        if (!(arr[i] + 1 == arr[i+1])){
            lastnum = arr[i];
            // This if statement is for checking for last element (don't add ", " at the end)
            if(i == arr.length -1){
                // Checks for cases where "-" is not needed. i.e. [5,10,12] -> logs "5, 10, 12"
                if(firstnum == lastnum){
                    myStr += firstnum;
                }
                // Else, "-" added to consecutive set of numbers
                else{
                    myStr += firstnum + "-" + lastnum;
                    firstnum = arr[i + 1];
                }
            }
            // separates the strings, rather than first index/last index.
            else{
                // Checks if the index is single, non-consecutive.
                if(firstnum == lastnum){
                    myStr += firstnum + ", "
                    firstnum = arr[i + 1];
                }
                // Else, "-" added to consecutive set of numbers
                else{
                    myStr += firstnum + "-" + lastnum + ", ";
                    firstnum = arr[i + 1];
                }
            }
            
        }
    }
    return myStr
  }

  console.log(bookIndex([1, 2, 3, 5, 6, 7, 10, 11]));
  console.log(bookIndex([5, 10, 11, 12]));

