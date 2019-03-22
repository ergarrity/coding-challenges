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

let intersection = function(set1, set2){
    let intersection = new Set([]);
    for(let item of set1){
        if(set2.has(item)){
            intersection.add(item);
        }
    }
    return intersection;
}