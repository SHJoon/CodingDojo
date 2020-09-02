/* 
  Stable sort

  Visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

  Time Complexity
    - Best case:    O(n log(n)) linearithmic
    - Average case: O(n log(n)) linearithmic
    - Worst case:   O(n log(n)) linearithmic

  Space: O(n) linear

  steps:
    1. create a merge function to merge two already sorted arrays into a single sorted array
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the previously created merge function
      - splitting of arrays stops when array can no longer be split
      - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array
*/

// merge
const sortedA = [1, 2, 4, 5, 6, 9];
const sortedB = [3, 7, 8, 10];
const expectedMerge = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Merges two already sorted arrays into a new sorted array
 * @param   {Array<number>} left
 * @param   {Array<number>} right
 *          @left and @right are sorted
 * @return  {Array<number>}
 *          A new sorted array containing all the elements of @left and @right
 * Time:    O(...)
 * Space:   O(...)
 */
function merge(left, right) {
  // Create a new array;
  // Loop through both left and right array, and compare values along the way
      // The bigger value will get pushed into the new array, and that value's array index will increment
  // Return the new array

  let arr = [];
  let left_i = 0;
  let right_i = 0;
  while(left_i < left.length && right_i < right.length){
    if(left[left_i] < right[right_i]){
      arr.push(left[left_i]);
      left_i++;
    }
    else{
      arr.push(right[right_i]);
      right_i++;
    }
  }

  // push rest of leftover array
  while(left_i < left.length){
    arr.push(left[left_i]);
    left_i++;
  }

  while(right_i < right.length){
    arr.push(right[right_i]);
    right_i++;
  }

  return arr;
}

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split and merged
 * @param   {Array<number>} nums
 *          In any order
 * @return  {Array<number>}
 *          New sorted array
 * Best:    O(n log(n)) linearithmic
 * Avg:     O(n log(n)) linearithmic
 * Worst:   O(n log(n)) linearithmic
 */
// test = [9, 2, 5, 6, 4, 3]
// [9,2,5]
// [9] [2,5]
// [9] [2] [5]
function mergeSort(nums) {
  // base case
  if (nums.length === 1) return nums;

  let mid = Math.floor(nums.length/2);

  let leftSide = nums.slice(0, mid);
  let rightSide = nums.slice(mid);

  // recursion
  //               9                      
  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

module.exports = { merge, mergeSort };
