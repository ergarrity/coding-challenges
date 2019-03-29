// Write a basic algorithm to convert a number to binary

function toBinary(n){
    let list = [];
    let makeNeg = false;
    
    if(n < 0){
        makeNeg = true;
        n = Math.abs(n);
    }

    while(n > 0){
        list.push(n % 2);
        n = Math.floor(n / 2);
    }

    let result = [];

    for(let i = list.length -1; i >= 0; i--){
        result.push(list[i]);
    }

    if(makeNeg){
        return 0 - Number(result.join(''));
    } else {
        return Number(result.join(''));
    }
}