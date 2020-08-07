/**
 * @param {Object} obj input object
 * @return {Object} a new object
 * with the keys as values and values as keys
 * 
 * to iterate through an object's keys: for(var key in obj)
 * to get the value: obj[key]
 */

function invertHash(obj) {
    // your code here
    var newObj = {}
    for (key in obj){
        newObj['example_key'] = 'example_val'
       newObj[ obj[key] ] = key

    //    newObj[ "George" ] = monkey
    //    newObj[ "Howard" ] = dog
    //    newObj[ "Madhu" ] = cat
    //    newObj[ "Nick" ] = puppy
    }
    // console.log(newObj)
    // newObj = {
    //     "George": monkey,
    //     "Howard": dog,
    //     "Madhu": cat
    // }
    return newObj
  }
  
  console.log(invertHash({ someKey: 'someVal' })); // should log { someVal: 'someKey' }
  console.log(invertHash({
    key1: 'val1',
    key2: 'val2',
    key3: 'val3'
  })); // should log { val1: 'key1', val2: 'key2' }
  console.log(invertHash({
      monkey: "George",
      dog: "Howard",
      cat: "Madhu",
      puppy: "Nick"
  }))
  
//   var someObj = {}
//   someObj["hereIsKey"] = "hereIsTheValue"
//   for (key in keys){
//       someObj[key] -> value
//   }








  
  /**
   * @param {Array<String>} arr1 array of strings
   * @param {Array<String>} arr2 array of strings
   * @return {Object}
   * with the elements from the first as keys
   * and the elements from the second as values
   * 
   * NOTE: the two arrays are of equal length
   */
  




  function zipArraysIntoMap(arr1, arr2) {
    var newobj = {};
      for (var i = 0; i < arr1.length; i++){
        newobj[arr1[i]] = arr2[i];
    }
    return newobj
  }
  
  console.log(
    zipArraysIntoMap(
      ['some', 'thing'], ['other', 'stuff']
    )
  );
  
  newObj = {}
  // newObj[key] = value
  newObj['examplekey'] = 'exampleval'
  newObj['howard'] = 'nick'

  output: newObj = {
      'examplekey': 'exampleval',
      'howard': 'nick'
  }
  // should log { some: 'other', thing: 'stuff' }
  // keys: arr1[i] 
// keys: arr1[i] 
// keys: arr1[i] 
// keys: arr1[i] 
// keys: arr1[i] 
