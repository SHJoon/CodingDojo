/**
 * @param {number} cents integer "cents"
 * @return {Object<string,number>} an object with coin denominations
 * each coin amount (starting from the highest
 * denomination) should be maximized
 * the total NUMBER of coins should be minimized
 */

function coinChange(cents) {
    // your code here
    var newObj = {};
    // newObj['quarters'] = 0 -> newObj = {'quarters': 0}

    var num_quarters = Math.floor(cents / 25);
    var remainder = cents - (25 * num_quarters);

    var num_dimes = Math.floor(remainder / 10);
    remainder = remainder - (10 * num_dimes);

    var num_nickels = Math.floor(remainder / 5);

    var num_pennies = remainder - (5 * num_nickels);
    
    newObj['quarters'] = num_quarters;
    newObj['dimes'] = num_dimes;
    newObj['nickels'] = num_nickels;
    newObj['pennies'] = num_pennies;
    
    return newObj;
  }
  
  console.log(coinChange(7));
  // should log { quarters: 0, dimes: 0, nickels: 1, pennies: 2 }
  
  console.log(coinChange(27));
  // should log { quarters: 1, dimes: 0, nickels: 0, pennies: 2 }



  function coinChange(cents){
      var coinArr = [25, 10, 5, 1];

  }
  
  






  /**
   * @param {number[]} arr an UNSORTED array of integers
   * @return {number|null} either the "missing" CONSECUTIVE number
   * or null if there is no missing number
   * BONUS: take in a second `step` parameter
   * to specify gaps in between the numbers
   */
  
  function missingValue(arr) {
    // your code here

    // Sort the input array
    for(var i = 0; i < arr.length; i++){
        var min_idx = i;
        for(var j = i; j < arr.length; j++){
            if(arr[min_idx] > arr[j]){
                min_idx = j;
            }
        }

        var temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }

    // With the sorted array, find if there is missing gap
    for(var i = 0; i < arr.length; i++){
        if(arr[i + 1] - arr[i] == 2){
            return arr[i] + 1;
        }
    }

    return null;
  }
  
  console.log(missingValue([2, 0, 3]));
  // should log 1 (in order, we'd have 0, 2, 3)
  
  console.log(missingValue([1, 0, 3, 2]));
  // should log null (in order, we'd have 0, 1, 2, 3)
  
  console.log(missingValue([-3, 3, -2, 0, 2, 1]));
  // should log -1 (in order, we'd have -3, -2, 0, 1, 2, 3)





  
  [-3, -2, 0, 1, 2, 3]
  i = 0
  arr[i] = -3
  arr[i+1] = -2

  if(arr[i + 1] - arr[i] == 2)
  -3 -> -2
  1 
  if ( 1 == 2)
  if ( 2 == 2)

  -2 + 1 = -1