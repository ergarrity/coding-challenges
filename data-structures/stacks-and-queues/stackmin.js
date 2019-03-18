/* How would you design a stack which, in addition to push and pop,
has a function min which returns the minimum element? Push, pop, and
min should all operate in contsant time. */

class Stack{
    constructor(){
        this.items = [];
        this.minItems = [];
        this.size = 0;
    }

    push(item){
        this.items.push(item);
        this.size++;

        if (item < this.minItems[this.minItems.length - 1] || this.minItems.length === 0){
            this.minItems.push(item);
        }
    }

    pop(){
        if (this.size === 0){
            return 'underflow error';
        }
        if (this.items[this.items.length - 1] === this.minItems[this.minItems.length - 1]){
            this.minItems.pop();
        }
        this.items.pop();
        this.size--;
    }

    min(){
        if (this.size === 0){
            return 'underflow error';
        }
        return this.minItems[this.minItems.length - 1];
    }
}