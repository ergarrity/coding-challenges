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
                return this.insertNode(current.left, value);
            }
        } else {
            if (!current.right){
                current.right = new Node(value);
            } else {
                return this.insertNode(current.right, value);
            }
        }
    }

    insert(value){
        if (!this.root){
            this.root = new Node(value);
        } else {
            return this.insertNode(this.root, value);
        }
    }

    search(value, node = this.root){
        if (!node){
            return false;
        }

        if (node.data == value){
            return true;
        }

        if (value < node.data){
            if (!node.left){
                return false;
            } else {
                return this.search(value, node.left);
            }
        } else {
            if (!node.right){
                return false;
            } else {
                return this.search(value, node.right);
            }
        }
    }
}