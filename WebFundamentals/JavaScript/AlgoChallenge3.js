/* 
  Array: Remove At
  Given array and an index, remove and return the array value
  at that index. Do this without using built-in array methods except pop().

first we are going to create a variable array
create a function that accepts parameters (arr) and an index and iterates that variable
identify the index of our array and remove or 'pop' that index while returning that value

example: arr = [0,1,2,3]
remove(1)
output: arr = [0,2,3]
*/

function removeAt(arr, n) {
  if (n > arr.length - 1) {
    console.log("Index is too big compared to the array size!");
    return null;
  }

  var temp = arr[n];
  for (var i = n; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  return temp;
}
var myArr = [5, 3, 4, 6, 8, 9];
console.log(removeAt(myArr, 2));
console.log(myArr);
//         arr=[5, 3, 4, 6, 8, 9], n=2
//              0  1  2  3  4  5
//temp=arr[2] = 4
// i=2 , i<5
//i=2, arr[2]=arr[2+1]=6, arr=[5, 3, 6, 6, 8, 9]
//i=3, arr[3]=arr[3+1]=8, arr=[5, 3, 6, 8, 8, 9]
//i=4, arr[4]=arr[4+1]=9, arr=[5, 3, 6, 8, 9, 9]
//i=5
//arr=[5, 3, 6, 8, 9, 9]-->[5, 3, 6, 8, 9]
//4

/* 
  Array: Min to Front
  Given an array of comparable values, move the lowest element to
  array’s front, shifting backward any elements previously ahead of it.
  Do not otherwise change the array’s order. Given [4,2,1,3,5] ,
  change it to [1,4,2,3,5] and return it. As always, do this without
  using built-in functions.
*/

// var exampleArr = [4,2,1,3,5];
// output: exampleArr = [1,4,2,3,5];
function minToFront(arr) {
  var min = arr[0];
  var position = 0;

  // Following for loop finds the minimum value and its index.
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      position = i;
    }
  }


//  Table for the for loop below
//  j = 2 -> 1 -> 0 -> exit the loop
//  example = [4,2,1,3,5] -> [4,2,2,3,5] -> [4,4,2,3,5];
  for (var j = position; j > 0; j--) {
    arr[j] = arr[j - 1];
  }

  //   [4,4,2,3,5] -> [min, 4,2,3,5] -> [1,4,2,3,5]
  arr[0] = min;

  return arr;
}
minToFront([4, 2, 1, 3, 5]);
//[4,2,1,3,5] --> [4,4,2,3,5]
