class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // insert @ end of list
    insert(value){
        let node = new Node(value);

        if (!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
}

