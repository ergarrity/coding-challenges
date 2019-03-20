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

    // insert @ end of list; O(1) runtime
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

    // search for a given value within a linked list; O(n) runtime
    search(value){
        let current = this.head;

        while(current){
            if (current.data == value){
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

