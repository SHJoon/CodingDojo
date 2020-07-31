function printAverage(x){
    var sum = 0;
    for (var i = 0; i < x.length; i++){
        sum += x[i];
    }
    return sum/x.length
 }
 var y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([5,2,8]);
 console.log(y); // should log 5




 function returnOddArray(){
     var newArr = [];
    for(var i = 1; i <= 255; i+=2)
    {
        newArr.push(i);
    }
    return newArr;
 }
 var y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]





 function squareValue(x){
    for(var i = 0; i < x.length; i++){
        x[i] *= x[i];
    }
    return x;
 }
 var y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]

