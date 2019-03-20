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

    // delete node whose data matches value from list and return true;
    // if no node exists with data that matches value, returns false
    delete(value) {
        if(!this.head){
            return false;
        }

        if(this.head.data == value){
            if(this.head.data == this.tail.data){
                this.head = null;
                this.tail = null;
                return true;
            } else {
                this.head = this.head.next;
                return true;
            }
        }

        let current = this.head;

        while(current.next){
            if(current.next.data == value){
                if(current.next.next){
                    current.next = current.next.next;
                    return true;
                }
                current.next = null;
                this.tail = current;
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

