/* 
  Given an arr and a separator, output a string of
  every item in the array separated by the separator.
  The separator should only be between two elements.

  join([1, 2, 3], ", ") => "1, 2, 3"
*/




/* 
Array: Second-Largest
Return the second-largest element of an array.
Given [42,1,4,Math.PI,7] , return 7 . If the array is too short, return null .
*/


function secondLargest(arr) {
    if (arr.length < 2) {
      return null;
    }

    var max, secondmax;
    // Since we know array length is at least 2, we can compare first two elements right away.
    if (arr[0] > arr[1]) {
    max = arr[0];
    secondmax = arr[1];
    } else {
    max = arr[1];
    secondmax = arr[0];
    }

    // First two elements taken care, so index starts at 2.
    for (var i = 2; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    } else if (secondmax < arr[i] && arr[i] != max) {
        secondmax = arr[i];
    }
    }

    // If the array consists of all same numbers, return null
    if(max == secondmax){
        return null;
    }

    return secondmax;
  }
  var myArr = [42, 1, 4, 3.14, 7];
  console.log(secondLargest(myArr));
