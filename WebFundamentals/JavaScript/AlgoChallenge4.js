/* 
  Given an arr and a separator, output a string of
  every item in the array separated by the separator.
  The separator should only be between two elements.

  join([1, 2, 3], ", ") => "1, 2, 3"
*/

function Join(arr, separator) {
  if (arr.length == 0) {
    return "";
  }
  var s = arr[0];
  for (var i = 1; i < arr.length; i++) {
    s = s + separator + arr[i];
  }
  return s;
}
console.log(Join([1, 0, -7, 900, "Coding"], ","));

/* 
Array: Second-Largest
Return the second-largest element of an array.
Given [42,1,4,Math.PI,7] , return 7 . If the array is too short, return null .
*/

// set a var for max
// set a var for nextMax
// go through the array, replacing max and nextMax as needed
// [], [2] -> return null

function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  } else {
    var max = arr[0];
    var nextMax = arr[1];
    // Comparison statement for max and nextMax
    if (nextMax > max) {
      max = arr[1];
      nextMax = arr[0];
    }

    // Compare rest of array
    for (var i = 2; i < arr.length; i++) {
      if (arr[i] > max) {
        // max = 1;                    // max = 40 -> 50;
        // nextMax = 0;                    // nextMax = 20 -> 40;
        // arr[i] = 4                    // arr[i] = 50;

        nextMax = max;
        max = arr[i];
        // max = 4;
        // nextMax = 1;
      }
        // max = 40
        // nextMax = 20 -> 30
        // arr[i] = 30
      else if(arr[i] > nextMax  && arr[i] != max) {
        nextMax = arr[i];
      }
    }
    return nextMax;
  }
}
console.log(secondLargest([0, 1, 4, 3.14, 7]));
