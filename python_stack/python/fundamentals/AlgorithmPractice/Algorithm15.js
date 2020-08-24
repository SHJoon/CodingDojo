/**
 * @param {number[]} intArr an array of integers
 * @param {number} i index, which defaults to 0
 * @return {number} the sum of all the elements
 */

function SumArray(arr, i = 0) {
    // your code here
    // Build the code using a for loop
    var sum = 0;
    for(var j = i; j < arr.length; j++){
        sum = sum + arr[j];
    }
    return sum;
  }

function rSumArray(arr, i = 0) {
    // your code here
    // base case
    if(i === arr.length){
        return 0;
        // return;
    }

    return arr[i] + rSumArray(arr, i + 1);

//  return 1 + rSumArray(arr, 1)
//  return 1 + (arr[1] + rSumArray(arr, 2))
//  return 1 + (4 + rSumArray(arr, 2))
//  return 1 + (4 + (arr[2] + rSumArray(arr, 3)))
//  return 1 + (4 + (6 + rSumArray(arr, 3)))
//  return 1 + (4 + (6 + 0))
//  return 11
  }
  
  console.log(rSumArray([1, 4, 6])); // should log 11
  console.log(rSumArray([2, -4, 6])); // should log 4
  console.log(rSumArray([2, -4, 6], 1)); // should log 2










  
  
  /**
   * @param {number} num
   * @return {number} the sum from one up to and including the number
   */

  function Sigma(num) {
    var sum = 0;
    for(var i = num; i > 0; i--){
        sum += i;
    }
    return sum;
  }
  
  function rSigma(num) {
    // your code here
    // base case
    if(num === 0){
        return 0;
    }

    // return sum + (num - 1)
    return num + rSigma(num - 1);
 // return 4 + rSigma(num - 1);
 // return 4 + rSigma(3);
 // return 4 + (3 + rSigma(2));
 // return 4 + (3 + (2 + rSigma(1)));
 // return 4 + (3 + (2 + (1 + rSigma(0))));
 // return 4 + (3 + (2 + (1 + (0))));

  }
  
  console.log(rSigma(4)); // should log 10 (1 + 2 + 3 + 4)
  console.log(rSigma(5)); // should log 15 (1 + 2 + 3 + 4 + 5)

