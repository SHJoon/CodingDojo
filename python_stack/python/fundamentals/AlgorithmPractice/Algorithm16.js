/**
 * @param {number} num integer
 * @return {number} integer
 * the result of multiplying the number by all
 * the preceding numbers down to 1
 */
function factorial(num) {
    // Same algo, but without recursion
    var mult = 1;

    for(var i = num; i >= 0; i--){
    //   num * num - 1
        if (i == 0){
            mult = mult * 1;
        }
        else{
            mult = mult * i;
        }
        //  5   =   1  *  5;    i = 5
        //  20  =   5  *  4;    i = 4
        //  60  =   20  *  3;    i = 3
        //  ...
    }
    return mult;
}



function rFactorial(num) {
    // your code here
    // exit condition (base case)
    if(num == 0){
        return 1;
    }

    return num * rFactorial(num - 1);

//  return 5   * rFactorial(num - 1);
//  return 5   * rFactorial(4);
//  return 5   * (4 * rFactorial(3));
//  return 5   * (4 * (3 * rFactorial(2)));
//  return 5   * (4 * (3 * (2 * rFactorial(1))));
//  return 5   * (4 * (3 * (2 * (1 * rFactorial(0)))));
//  return 5   * (4 * (3 * (2 * (1 * 1))));
  }
  
  console.log(rFactorial(5)); // should log 120 (5 x 4 x 3 x 2 x 1)
  console.log(rFactorial(4)); // should log 24 (4 x 3 x 2 x 1)
  console.log(rFactorial(0)); // should log 1 (only 1 way to make 0 - multiplying 0 by any other number)
  
  // base case: to stop the recursion (preventing an infinite loop)
  // recursive call (the function calls itself inside the body)
  // forward movement: bringing us closer to the base case






  /**
   * @param {number} idx the index of the term to return
   * @return {number} the sum of the two previous terms
   * first two terms are 0, 1
   * subsequent terms are formed by adding the previous two terms
   * Terms: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.
   * BONUS: keep track of your previous work with a default parameter
   */

function fibonacci(idx){
    var sum = 0;
    var temp1 = 0
    var temp2 = 1;
    for (var i = 0; i < idx - 1; i++){
        sum = temp1 + temp2;
        temp1 = temp2;
        temp2 = sum;
    }
    return sum;
}
  
  function rFibonacci(idx) {
    // your code here
    if (idx == 0 || idx == 1){
        return idx;
    }
    // if(idx == 0){
    //     return 0;
    // }
    // else if(idx == 1){
    //     return 1;
    // }

    return rFibonacci(idx - 1) + rFibonacci(idx - 2);
//  idx = 3
//  return rFibonacci(2) + rFibonacci(1);
//  return (rFibonacci(1) + rFibonacci(0)) + 1;
//  return (1 + 0) + 1;
//  return 2
  }
//   rFibonacci(5)
//   idx = 5
//   rFibonacci(4) + rFibonacci(3)
//   (rFibonacci(3) + rFibonacci(2)) + (rFibonacci(2) + rFibonacci(1))
//   ((rFibonacci(2) + rFibonacci(1)) + (rFibonacci(1) + rFibonacci(0))) + (rFibonacci(1) + rFibonacci(0)) + 1
//   rFibonacci(1) + rFibonacci(0) + 1 + 1 + 0 + 1 + 0 + 1
//   1 + 0 + 1 + 1 + 0 + 1 + 0 + 1
//   5
  
  console.log(rFibonacci(2)); // should log 1 (1 + 0)
  console.log(rFibonacci(3)); // should log 2 (1 + 1)
  console.log(rFibonacci(7)); // should log 13 (8 + 5)