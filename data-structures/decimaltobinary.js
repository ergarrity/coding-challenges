import Stack from './stackimplementation';

function divideByTwo(decNumber){
    remStack = new Stack();

    while (decNumber > 0){
        let rem = decNumber % 2;
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    let binString = "";
    while (!remStack.isEmpty()){
        binString += remStack.pop().toString();
    }
    return binString;
}