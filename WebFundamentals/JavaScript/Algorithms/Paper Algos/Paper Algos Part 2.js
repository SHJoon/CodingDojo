function printUpTo(x){
    if(x < 0){
        console.log("negative number");
        return false;
    }
    for(var i = 1; i<=x; i++){
        console.log(i)
    }
  }
  printUpTo(1000000); // should print all the integers from 1 to 1000000
  var y = printUpTo(-10); // should return false
  console.log(y); // should print false





  function printSum(x){
    var sum = 0;
    for(var i = 0; i <= x; i++){
        console.log("num: " + i);
        sum += i;
        console.log("sum: " + sum)
    }
    return sum
  }
  var y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640




  function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum += x[i]
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6