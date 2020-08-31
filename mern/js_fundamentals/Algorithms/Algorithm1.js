function bubbleSort(arr){
    // Iterate through the array (for loop, while)
    //  -- Compare the current index with the next index
    //      -- IF current index value > next index value
    //          -- swap
    //      -- ELSE Do nothing
    //  -- Check if the whole array is sorted or not.

    var temp;

    var isNotSorted = true;

    while(isNotSorted){
        isNotSorted = false;

        for (var i = 0; i < arr.length - 1; i++){
            if (arr[i] > arr[i+1]){
                isNotSorted = true;
                // swapping algo
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
}


var newArr = [5,0,10,2,6,7,1];
bubbleSort(newArr);
console.log(newArr);


function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var min_idx = i;
        for(var j = i; j < arr.length; j++){
            if(arr[min_idx] > arr[j]){
                min_idx = j;
            }
        }

        // Swap the values
        var temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}