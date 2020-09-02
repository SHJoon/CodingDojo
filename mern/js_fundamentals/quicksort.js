function partition(arr, left, right){
    var pivot_val = arr[Math.floor((left + right)/2)];
    var i = left;
    var j = right;

    while(i <= j){
        while(arr[i] < pivot_val){
            i++;
        }

        while(arr[j] > pivot_val){
            j--;
        }

        if(i <= j){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i++;
            j--;
        }
    }
    return i;
}

function quicksort(arr, left, right){
    if (arr.length > 1){
        var partIndex = partition(arr, left, right);

        if (left < partIndex - 1){
            quicksort(arr, left, partIndex - 1);
        }

        if (partIndex < right){
            quicksort(arr, partIndex, right);
        }
    }
    return arr;
}
var myArr = [5,3,7,6,2,9];
var sortedArr = quicksort(myArr, 0, myArr.length - 1);
console.log(sortedArr);