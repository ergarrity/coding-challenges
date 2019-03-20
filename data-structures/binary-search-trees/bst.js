class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insertNode(current, value){
        if (value < current.data){
            if (!current.left){
                current.left = new Node(value);
            } else {
                this.insertNode(current.left, value);
            }
        } else {
            if (!current.right){
                current.right = new Node(value);
            } else {
                this.insertNode(current.right, value);
            }
        }
    }

    insert(value){
        if (!this.root){
            this.root = new Node(value);
        } else {
            this.insertNode(this.root, value);
        }
    }
}