// 1.Biggie Size - Given an array, write a function that changes all positive numbers
// in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that
// same array, changed to [-1, "big", "big", -5].

function bigSize(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = "big";
    }
  }
}
var myArr = [1, 3, 5, -5];
bigSize(myArr);
console.log(myArr);

// 2.Print Low, Return High - Create a function that takes in an array of numbers.
// The function should print the lowest value in the array, and return the highest value in the array.
function lowHigh(arr) {
  min = arr[0];
  max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("Printed Value: " + min);
  return max;
}
var myArr = [1, 3, 5, -5];
console.log("Returned Value: " + lowHigh(myArr));

// 3.Print One, Return Another - Build a function that takes in an array of numbers.
// The function should print the second-to-last value in the array, and return the first odd value in the array.
function returnOdd(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      console.log("Printed Value: " + arr[arr.length - 2]);
      return arr[i];
    }
  }
}
var myArr = [2, 4, 10, 5, 17, 20];
console.log("Returned Value: " + returnOdd(myArr));

// 4.Double Vision - Given an array (similar to saying 'takes in an array'), create a
// function that returns a new array where each value in the original array has been doubled.
// Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function double(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
var myArr = [1, 2, 3];
newArray = double(myArr);
console.log(myArr);
console.log(newArray);

// 5.Count Positives - Given an array of numbers, create a function to replace the last value
// with the number of positive values found in the array.  Example, countPositives([-1,1,1,1])
// changes the original array to [-1,1,1,3] and returns it.
function countPositives(arr) {
  count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  arr[arr.length - 1] = count;
}
var myArr = [-1, 1, 1, 1];
countPositives(myArr);
console.log(myArr);

// 6.Evens and Odds - Create a function that accepts an array.  Every time that array has three
// odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function evenOdd(arr) {
  odd_count = 0;
  even_count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      odd_count++;
      even_count = 0;
      if (odd_count >= 3) {
        console.log("That's odd!");
      }
    } else {
      even_count++;
      odd_count = 0;
      if (even_count >= 3) {
        console.log("Even more so!");
      }
    }
  }
}
myArr = [1, 5, 7, 2, 1, 3, 9, 4, 5, 6, 8, 2, 1, 3, 6];
evenOdd(myArr);

// 7.Increment the Seconds - Given an array of numbers arr, add 1 to every other element,
// specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function incrementSeconds(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      arr[i] += 1;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return arr;
}
myArr = [1, 5, 7, 2, 1, 3, 9, 4, 5, 6, 8, 2, 1, 3, 6];
console.log(incrementSeconds(myArr));

// 8.Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array')
// containing strings.  Working within that same array, replace each string with a number - the
// length of the string at the previous array index - and return the array.  For example, previousLengths
// (["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function prevLengths(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1].length;
  }
  return arr;
}
myArr = ["hello", "dojo", "awesome"];
console.log(prevLengths(myArr));

// 9.Add Seven - Build a function that accepts an array. Return a new array with all the values
// of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3])
// should return [8,9,10] in a new array.
function addSeven(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] + 7;
  }
  return newArr;
}
var myArr = [1, 2, 3];
console.log(addSeven(myArr));

// 10.Reverse Array - Given an array, write a function that reverses its values, in-place.  Example:
// reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].
// Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}
var myArr = [1, 2, 3, 4, 5, 6, 7];
console.log(reverse(myArr));

// 11.Outlook: Negative - Given an array, create and return a new one containing all the values of the original
// array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function neg(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = arr[i] * -1;
    }
  }
  return arr;
}
var myArr = [-1, 2, -3, 4, 5, -6, -20];
console.log(neg(myArr));

// 12.Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values
// is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function food(arr) {
  isfood = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
      isfood = true;
    }
  }
  if (!isfood) {
    console.log("I'm hungry");
  }
}
var myArr = ["food", 1, 3, "notfood"];
food(myArr);

// 13.Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.
// Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].
// swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapTowardCenter(arr) {
  for (var i = 0; i < arr.length / 2; i += 2) {
    temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
}
var myArr = [1, 2, 3, 4, 5, 6];
swapTowardCenter(myArr);
console.log(myArr);

// 14.Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number
// num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArray(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= num;
  }
  return arr;
}
var myArr = [1, 2, 3];
console.log(scaleArray([1, 2, 3], 3));
