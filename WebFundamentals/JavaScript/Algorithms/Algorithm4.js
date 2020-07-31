// Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanY(arr, Y){
    var count = 0;
    for(var i = 0; i< arr.length; i++){
        if(Y<arr[i]){
            console.log(arr[i]);
            count++;
        }
    }
    console.log("count: "+ count);
}
var myArr = [2,10,-5,5,1,65];
greaterThanY(myArr, 8);


// Given an array, print the max, min and average values for that array.
function minMax(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log("max: " + max);
    console.log("min: " + min);
    console.log("avg: " + (sum/arr.length));
}
var myArr = [2,10,-5,5,1,65];
minMax(myArr);


// Given an array of numbers, create a function that returns a new array
// where negative values were replaced with the string ‘Dojo’.   For example,
// replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replaceNegatives(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            newArr.push('Dojo');
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var myArr = [2,-1,0,15,-3,-1,2];
console.log(replaceNegatives(myArr));



// Given array, and indices start and end, remove vals in that index range,
// working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4)
// should return [20,30,70].

function removeVals(arr, start, end){
    for(var i = 0; i < (arr.length - end +1); i++){
        arr[start] = arr[end +1];
    }
    for(var i = 0; i < (end - start +1); i++){
        arr.pop();
    }
}

myArr = [20,30,40,50,60,70];
removeVals(myArr, 2, 4);
console.log(myArr);
