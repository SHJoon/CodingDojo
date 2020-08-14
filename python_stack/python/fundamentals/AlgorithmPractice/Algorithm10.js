/**
 * @param {Array<Object>} newInv new inventory
 * @param {Array<Object>} currentInv current inventory
 * @return {Array<Object>} the current inventory after
 * updating it with the new inventory
 * new items get added; existing items have quantities changed
 */

function updateInventory(newInv, currentInv) {
    // your code here
    // A conditional statement
        // if the same "name" key-value pair exists in newInv and currentInv,
        // add the quantities together

        // else, put newInv and currentInv into an array.
    // if (newInv['name'] == currentInv['name']){
    //     currentInv['quantity'] += newInv[curr_quantity+new_quantity];
    //     return currentInv
    // }
    // else{
    //     return [newInv, currentInv]
    // }
    // [{newObj1}, {newObj2}] // new inventory

    // [{currObj1}, {currObj2}, {currObj3}] //current inventory

    for (var new_item of newInv){
        var found_item = false;
        for (var curr_item of currentInv){
            if (new_item['name'] === curr_item['name']){
                curr_item['quantity'] += new_item['quantity'];
                found_item = true;
                break;
            }
        }
        if (!found_item){
            currentInv.push(new_item);
        }
    }
    return currentInv
  } 
  
  console.log(updateInventory([
    {
      name: 'item',
      quantity: 1
    }
  ], [
    {
      name: 'item',
      quantity: 2
    }
  ]));
  // should log [{ name: 'item', quantity: 3 }]
  
  console.log(updateInventory([
    {
      name: 'item',
      quantity: 1
    }
  ], [
    {
      name: 'other item',
      quantity: 2
    }
  ]));
  // should log [{ name: 'item', quantity: 1 }, { name: 'other item', quantity: 2 }]
   
  myDict[quantity]
  








  
  /**
   * @param {String} str
   * @return {String} with the whitespace removed from both ends
   * whitespace characters: ' ', '\t', '\n'
   */
  
  function trim(str) {
    // your code here
    // loop through the string from the beginning
    //  - If the whitespace ends, break out of the loop

    //loop through the string from the back
    // - If the whitespace ends, break out of the loop
    var beginning_index = -1;
    var end_index = str.length;
    if(str[0] == ' '){
        for(var i = 0; i < str.length; i++){
            if(str[i+1] != ' '){
                beginning_index = i;
                break;
            }
        }
    }

    if(str[str.length - 1] == ' '){
        for(var i = str.length-1; i >= 0; i--){
            if(str[i-1] != ' '){
                end_index = i;
                break;
            }
        }
    }

    var newStr = ''
    for(var i = beginning_index + 1; i < end_index; i++){
        newStr += str[i];
    }

    return newStr;
  }
  
  console.log(trim('this   ')); // should log 'this'
  console.log(trim('        multiline')); // should log 'multiline'
  console.log(trim('    this that     ')); // should log 'this that'
  
  








  /**
   * @param {String} str1
   * @param {String} str2
   * @return {Boolean} Is the second string an anagram of the first?
   * Anagram: characters can be rearranged to make the same string
   */
  
  function isAnagram(str1, str2) {
    // your code here
  }
  
  console.log(isAnagram('Yes', 'eYs')); // should log true
  console.log(isAnagram('silent', 'listen')); // should log true
  console.log(isAnagram('ono', 'noa')); // should log false