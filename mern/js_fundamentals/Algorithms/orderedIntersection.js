/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (deduped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

/**
 * Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * @param   {Array<number>} sortedA
 * @param   {Array<number>} sortedB
 *          @sortedA and @sortedB are both sorted multisets
 *          (multi in that it can contain multiple dupes)
 * @return  {Array<number>}
 *          The sorted set intersection: a new array that
 *          is sorted and contains only the shared values
 *          between the two arrays deduped
 * Time:    O(...)
 * Space:   O(...)
 */

 // Loop
 [0, 1, 2, 2, 2, 7];
  {
    0: 1;
    1: 1;
    2: 1;
    7: 1;
  }

  // Loop
  [2, 2, 6, 6, 7];

  [2]

function orderedIntersection(sortedA, sortedB) {
  // Loop through the first array
  //  -- Create key value pairs, saving all the numbers that exist in 1st array

  // Loop through the second array
  //  -- Compare each number to see if it exists inside the object.
  //    -- If it does exist, add it to a new array (without duplication)
  //    -- Else do nothing.

  let newArr = [];
  let searchTable = {};

  for (let i = 0; i < sortedA.length; i++){
    searchTable[sortedA[i]] = 1;
  }

  // sortedA == [0, 1, 2, 2, 2, 7];
  // searchTable = {
  //   0: 1,
  //   1: 1,
  //   2: 1,
  //   7: 1,
  // }

  // [2, 2, 6, 6, 7];

  for (let j = 0; j < sortedB.length; j++){
    let currentValue = sortedB[j];
    if (!newArr.includes(currentValue)){
      if (searchTable.hasOwnProperty(currentValue)){
        newArr.push(currentValue);
      }
    }
  }

  return newArr;
}

module.exports = { orderedIntersection };
