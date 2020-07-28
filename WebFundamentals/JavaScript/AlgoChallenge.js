/* 
  Recreate the pop method without using .pop(); Be sure to return the popped value.
*/

// Return the last value
// Change the array.length


// function pop(arr)
    // var newArr = [], lastValue=0;
    for(var i =0;i<arr.length-1; i++){
        newArr[i] = arr[i];
    }
    lastValue=arr[arr.length-1];
    arr = newArr;
    // // return arr
    // return lastValue;
    
// }

var myArr = [-1,8,2,74,5,0,5];
console.log(myArr);
var lastnum = pop(myArr);
// myArr = [-1,8,2,74,5,0];
console.log(myArr);
console.log(lastnum);


// -------------- Howard

function pop(arr) {
    var temp = arr[arr.length-1];
    arr.length = arr.length -1;
    return temp;
}

var myArr = [-1,8,2,74,5,0,5];
console.log(myArr);
var lastNum = pop(myArr);
console.log(myArr);
console.log(lastNum);





// --------------------------------Trinh

var arr = [-1,8,2,74,5,0,5], lastValue=0, newArr=[]; 
// var newArr = [], lastValue=0;
for(var i =0;i<arr.length-1; i++){
    newArr[i] = arr[i];
}
lastValue=arr[arr.length-1];
arr = newArr; 
console.log(arr); 
console.log(lastValue);

function popArr(arr){
  var lastValue=0, newArr=[];
    for(var i =0;i<arr.length-1; i++){
        newArr[i] = arr[i];
    }
    lastValue=arr[arr.length-1];
    arr = newArr; 
  return lastValue;
}
var arr = [-1,8,2,74,5,0,5]
var lastnum = popArr(arr);
console.log(arr);
console.log(lastnum)

// you said we don't need a for loop. tell more.  show up top??



/* 
  Array: Pop Front
  Create a function that, given an array, removes and returns the value at the
  beginning of the array. Do this without using any built-in array methods except pop() .
*/

// var example = [0,-1,5,7];
// Output : example = [-1,5,7];
// for(var i=0 ; i<arr.length;i++){
    
// }
// shift all to left, then pop last last value.

function popFront(arr){
  var firstValue=arr[0];
  for(var i=0; i<arr.length;i++){
  
    arr[i]=arr[i+1];
    // return firstValue;
    // If return was placed here, we would exit out before finishing a single loop
  } 
  arr.length = arr.length-1;
  return firstValue;
}
var myArr = [5,4,1,-2,3];
console.log(myArr);
var num = popFront(myArr);
console.log(myArr);
console.log(num);

// I have problems when there is an if statement. and more curly brackets.
// It's definitely something you have to get used to/practice to get comfortable.


// thanks for explaining more. 
// the curly brackets are color coded. That helps me to know where the beginning/ending are

// what extension do you have that make them color coded? - -  i have been highlighting them to see where they end and it highlights them.
// look at row 88. the curly bracket is orange/yellow. It closes on for 98 with the same color.
// hmm, choose file/preference/color theme: monokai
// for me, all of them are white.------------- I have to have a dark theme. white hurts my eyes!

// certain themes don't highlight it still! so be careful







//   var[1] = var[0]
// x and y instead of 1 and 0

// [0,1,2,3]
// [1,1,2,3]
// [1,2,2,3]
// [1,2,3,3]
// [1,2,3]




