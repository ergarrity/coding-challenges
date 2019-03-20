/* Write a program to sort a stack such that the smallest
items are on the top. You can use an additional temporary
stack, but you may not copy the elements into any other
data structure. Stack operations: push, pop, peek, isEmpty.
*/
class Stack{
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.push(item);
    }

    pop(){
        if(this.items.length == 0){
            return 'underflow error';
        }
        this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        if (this.items.length == 0) {
            return true;
        }
        return false;
    }
}
function sortStack(stack){
    let result = new Stack();

    let temp;

    while(!stack.isEmpty()){
        temp = stack.items.pop();
        if (result.isEmpty()){
            result.push(temp);
        } else {
            while (!result.isEmpty() && result.peek() > temp){
                stack.push(result.items.pop());
                console.log(result, stack, 'result' , 'stack')
            }
            result.push(temp);
        }
    }
    while(!result.isEmpty()){
        stack.push(result.items.pop());
    }
    return stack;
}

let myStack = new Stack();
myStack.push(8)
myStack.push(12)
myStack.push(10)
myStack.push(7)