// 1. Print 1-255
// Print1To255()
// Print all the integers from 1 to 255.

// Create a function called Print1to255()
// that takes no parameters
// Loop --
//      set a variable i to 1
//      Keep going if i <= 255
//      Each time through the loop -- increment by 1
//      print i to the console
// Do we return anything?
// Maybe return inside the for loop??

function Print1To255() {
  for (var i = 1; i <= 255; i++) {
    console.log(i);
  }
}

Print1To255();

// 2. Print Odds 1-255
// PrintOdds1To255()
// Print all odd integers from 1 to 255.

// Create a function called PrintOdds1To255()
// that takes no parameters
// Loop --
//      set a variable i to 1
//      Keep going if i <= 255
//      Each time through the loop -- increment i by 2  OR   5%2 -> 5/2  2, remainder=1
//      print i to the console

function PrintOdds1To255() {
  for (var i = 1; i <= 255; i += 2) {
    console.log(i);
  }
}

PrintOdds1To255();

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.

// Create a function called Print0to255()
// that takes no parameters
// Loop --
//      set a variable i to 0
//      Keep going if i <= 255
//      Each time through the loop -- increment by 1
//      print i to the console

function Print0To255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    console.log(i);
    sum += i; // sum = sum + i;
    console.log(sum);
  }
}

Print0To255();

// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
// PrintArrayVals(arr)

// var arr = [0,1,2,3];
// Output: 0,1,2,3

// Loop --
//    Print out each element

var arr = [0, 1, 5, 6];

function PrintArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

PrintArrayVals(arr);

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element.

// var arr = [1,5,21,9];
// Output: 21

var arr = [1, 5, 21, 9];

function PrintMaxOfArray(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

var maxnum = PrintMaxOfArray(arr);
console.log(maxnum);

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.

function PrintAverageOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

var myArr = [1, 2, 3, 4, 5];
console.log(PrintAverageOfArray(myArr));

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).

// Instantiate empty array
// Create function
// Loop --
//    Push odd numbers into the array

function ReturnOddsArray1To255() {
  var arr = [];
  for (var i = 1; i <= 255; i += 2) {
    arr.push(i);
  }
  return arr;
}

console.log(ReturnOddsArray1To255());

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.

// example_arr = [0,1,2,3,4]
// Create a function
// Loop --
//    Square each number and replace the original number

example_arr = [0, 1, 2, 3, 4];

function SquareArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(arr);
}

SquareArrayVals(example_arr);

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.

// Create a function
// Loop --
//    Compare each value with Y. If value is bigger, increment count and print out the value

function ReturnArrayCountGreaterThanY(arr, Y){
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
     if (arr[i] > Y){
       count = count + 1;
       console.log(arr[i]);
     }
  }
  return count;
}
var myArr = [1,8,20,41,3,54]

console.log(ReturnArrayCountGreaterThanY(myArr, 19))


// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.

// example = [-1,-2,5,7,-3];
// Output -> example = [0,0,5,7,0];


// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.

// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
