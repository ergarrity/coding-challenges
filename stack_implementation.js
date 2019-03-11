class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if (this.items.length === 0){
            return "underflow";
        }
        this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        if (this.items.length === 0){
            return true;
        } else {
            return false;
        }
    }

    size(){
        return this.items.length;
    }
}

function isBalanced(s){
    let openParens = new Stack();
    
    for (let i = 0; i < s.length; i++){
        if (s[i] === "(" || s[i] === "[" || s[i] === "{"){
            openParens.push(s[i]);
        } else if (s[i] === ")" || s[i] === "]" || s[i] === "}"){
            if (openParens.isEmpty()){
                return false;
            } else if (matches[openParens.peek()] === s[i]){
                openParens.pop();
            } else {
                return false;
            }
        }
    }
    if (openParens.size() === 0){
        return true;
    } else {
        return false;
    }
}

let matches = {
    "{": "}",
    "(": ")",
    "[": "]"
}