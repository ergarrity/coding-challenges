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