/*
* @param {number[]} arr
* @return {boolean}
* Is there a point between indices
* where the summed values on each side are equal?
*/

/** 
 * our plan of attack!
 * 1.   we are going to create a function that accepts a parameter of '{number[]}'
 * 2.   we are going to iterate through the array of numbers to look for a balance point 
 * 3.   aka "Is there a point between indices where the summed values on each side are equal?"
 * 4.   return a boolean
*/


/*
Second round of for loop
var             val         console
arr             [1,2,3,4]
sum             9
i               1
locationSum     2
j               2

*/

function balancePoint(arr) {
    // your code here
    for (var i = 0; i < arr.length; i++){
        var rightSum = 0;
        var leftSum = 0;

        for (var j = i; j >= 0; j--){
            leftSum += arr[j];
        }
        for (var k = i + 1; k <arr.length; k++){
            rightSum += arr[k];
        }
        
        if (leftSum == rightSum){
            return true;
        }
    }
    return false;
}

console.log(balancePoint([1, 2, 3, 4])); // should log false
console.log(balancePoint([3, 4, 2, 5]));
// should log true (between indices 1 and 2)


/*
* @param {number[]} arr
* @return {number}
* if there is an index in which the summed values
* on each side are equal, return it
* otherwise, return -1
*/

/*
our plan of attack!
1.  Loop through the array
2.  Check the left side of the index, and add them up
3.  Check the right side of the index, and add them up
*/

/*
var             val                 console
arr         [-2, 5, 7, 0, 3]
i           0
leftSum     0
rightSum    0->5
j           -1
k           1->2
*/

function balanceIndex(arr) {
    // your code here
    for (var i = 0; i < arr.length; i++){
        var leftSum = 0;
        var rightSum = 0;
        for (var j = i - 1; j >= 0; j--){
            leftSum += arr[j];
        }
        for (var k = i + 1; k < arr.length; k++){      
            rightSum += arr[k];
        }
        
        if (leftSum == rightSum){
            return i;
        }
    }
    return -1;
}

console.log(balanceIndex([-2, 5, 7, 0, 3])); // should log 2
console.log(balanceIndex([9, 9])); // should log -1