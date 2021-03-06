const mergeSort = function(lst){
    if (lst.length < 2){
        return lst;
    }

    let m = Math.floor(lst.length / 2);
    let left = lst.slice(0, m);
    let right = lst.slice(m);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}


const merge = function(l, r){
    let result = [];

    while (l.length > 0 && r.length > 0){
        result.push(l[0] < r[0] ? l.shift() : r.shift());
    }

    return result.concat(l.length ? l : r)
}


const quickSort = function(lst){
    if (lst.length < 2){
        return lst;
    }

    let pivot = lst[0];
    let lesser = [];
    let greater = [];

    for (let i = 1; i < lst.length; i++){
        if (lst[i] < pivot){
            lesser.push(lst[i]);
        } else {
            greater.push(lst[i]);
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater));
}


const bubbleSort = function(lst){
    if (lst.length < 2){
        return lst;
    }

    let swap;
    let n = lst.length - 1;
    let result = lst;
    
    do {
        swap = false;
        for(let i = 0; i < n; i++){
            if(result[i] > result[i+1]){
                let temp = result[i];
                result[i] = result[i+1];
                result[i+1] = temp;
                swap = true;
            }
        }
        n--;
    } while (swap);
    return result;
}

const insertionSort = function(lst){
    let unsorted = 1;

    while (unsorted < lst.length){
        let temp = lst[unsorted];
        let i = unsorted - 1;
        while(i >= 0 && temp < lst[i]){
            lst[i+1] = lst[i];
            i--;
        }
        lst[i+1] = temp;
        unsorted++;
    }
    return lst;
}