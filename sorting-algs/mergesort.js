function mergeSort(lst){
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

function merge(l, r){
    let result = [];

    while (l.length > 0 && r.length > 0){
        result.push(l[0] < r[0] ? l.shift() : r.shift());
    }

    return result.concat(l.length ? l : r)
}