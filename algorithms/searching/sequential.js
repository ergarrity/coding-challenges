// Sequential search: write an algorithm that searches for a
// specific item inside a list

function sequentialSearch(list, item){
    if(!list.length) return -1;

    let i = 0;

    while(i < list.length && list[i] !== item){
        i++;
    }

    if(list[i] == item) return i;
    
    return -1;
}