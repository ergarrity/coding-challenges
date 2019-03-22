let union = function(set1, set2){
    let union = new Set([])
    for(let item of set1){
        union.add(item);
    }
    for(let item of set2){
        union.add(item);
    }
    return union;
}