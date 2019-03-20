/* Given a directed graph, design an algorithm to find out whether there
is a route between two nodes. */

class Node{
    constructor(data){
        this.data = data;
        this.adj = [];
        this.next = null;
    }
}

class Graph{
    constructor(){
        this.nodes = [];
    }
}

class Queue{
    constructor(){
        this.head = null;
    }

    enqueue(item){
        let node = new Node(item);
        
        if(!this.head){
            this.head = node;
        } else {
        let temp = this.head;
        while(temp.next){
            temp = temp.next;
        }
        temp.next = node;
        }
    }

    dequeue(){
        if(!this.head){
            return 'underflow error';
        } else {
            let temp = this.head;
            this.head = this.head.next;
            return temp;
        }
    }

    isEmpty(){
        if(!this.head){
            return true;
        }
        return false;
    }
}

function areConnected(nodeA, nodeB){
    let queue = new Queue();
    nodeA.marked = true;
    queue.enqueue(nodeA);

    while(!queue.isEmpty()){
        let next = queue.dequeue();
        if(next.data == nodeB.data){
            return true;
        }
        
        for(let i = 0; i < next.adj.length; i++){
            if(!next.adj[i].marked){
                next.adj[i].marked = true;
                queue.enqueue(next.adj[i]);
            }
        }
    }
    return false;
}

let A = new Node('A');
let B = new Node('B');
let C = new Node('C');
let D = new Node('D');
let E = new Node('E');

