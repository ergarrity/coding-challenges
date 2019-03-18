/* Given a circular linked list, implement an algorithm that returns
the node at the beginning of the loop. */
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function detectLoop(head){
    let seen = new Set([]);
    let temp = head;

    while(temp){
        if (seen.has(temp)){
            return temp;
        } else {
            seen.add(temp);
        }
        temp = temp.next;
    }
    return "No loop detected";
}

let A = new Node('A');
let B = new Node('B');
let C = new Node('C');
let D = new Node('D');
let E = new Node('E');