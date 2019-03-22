let Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.next = null;
}

let Queue = function(){
    this.head = null;
    this.tail = null;
}

Queue.prototype.enqueueNode = function(node){
    if (!this.head){
        this.head = node;
        this.tail = node;
    } 
    else {
        this.tail.next = node;
        this.tail = this.tail.next;
    }
}

Queue.prototype.enqueue = function (data){
    if (!this.head){
        let node = new Node(data);
        this.head = node;
        this.tail = node;
    } 
    else {
        this.tail.next = new Node(data);
        this.tail = this.tail.next;
    }
}

Queue.prototype.dequeue = function() {
    if (!this.head){
        return 'underflow error';
    } 
    else {
        let temp = this.head;
        this.head = this.head.next;
        return temp;
    }
}

Queue.prototype.isEmpty = function() {
    if (!this.head){
        return true;
    } 
    else {
        return false;
    }
}

let BinarySearchTree = function(){
    this.root = null;
}

BinarySearchTree.prototype.insert = function(value){
    if (!this.root){
        this.root = new Node(value);
    } 
    else {
        return this.insertNode(this.root, value);
    }
}

BinarySearchTree.prototype.insertNode = function (current, value) {
    if (value < current.data){
        if (!current.left) {
            current.left = new Node(value);
        } 
        else {
            return this.insertNode(current.left, value);
        }
    } 
    else {
        if (!current.right){
            current.right = new Node(value);
        } 
        else {
            return this.insertNode(current.right, value);
        }
    }
}

BinarySearchTree.prototype.contains = function(value, node = this.root){
    if (!node){
        return false;
    } 
    else if (value == node.data){
        return true;
    } 
    else if (value < node.data){
        return this.contains(value, node.left);
    } 
    else {
        return this.contains(value, node.right)
    }
}

BinarySearchTree.prototype.findParent = function(value, node = this.root){
    if (!node){
        return false;
    } 
    else if (value == node.data){
        return false;
    }
    else if (value < node.data){
        if (!node.left){
            return false;
        } 
        else if (value == node.left.data) {
            return node;
        } 
        else {
            return this.findParent(value, node.left);
        }
    } 
    else {
        if (!node.right){
            return false;
        } 
        else if (node.right.data == value){
            return node;
        } 
        else {
            return this.findParent(value, node.right)
        }
    }
}

BinarySearchTree.prototype.findNode = function(value, node = this.root){
    if (!node){
        return false;
    }

    if (value == node.data){
        return node;
    }

    if (value < node.data){
        return this.findNode(value, node.left);
    } 
    else {
        return this.findNode(value, node.right);
    }
}

BinarySearchTree.prototype.findMin = function(){
    if (!this.root){
        return false;
    }

    let temp = this.root;

    while (temp.left){
        temp = temp.left;
    }
    return temp.data;
}

BinarySearchTree.prototype.findMax = function(){
    if (!this.root){
        return false;
    }
    
    let temp = this.root;

    while(temp.right){
        temp = temp.right;
    }
    return temp;
}

BinarySearchTree.prototype.preorder = function(node = this.root){
    if (node){
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }
}

BinarySearchTree.prototype.postorder = function(node = this.root){
    if (node){
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
    }
}

BinarySearchTree.prototype.inorder = function(node = this.root){
    if (node){
        this.inorder(node.left);
        console.log(node);
        this.inorder(node.right);
    }
}

BinarySearchTree.prototype.breadthFirst = function(node = this.root){
    let q = new Queue();
    while (node){
        console.log(node.data);
        if (node.left){
            q.enqueueNode(node.left);
        }
        if (node.right){
            q.enqueue(node.right);
        }
        if (!q.isEmpty()){
            node = q.dequeue()
        } else {
            node = null;
        }
    }
}

class BiarySearchTree{


    // remove(value) {
    //     this.root = this.removeNode(this.root, value);
    // }

    // removeNode(node, value){
    //     if(!node){
    //         return null;
    //     } else if (value < node.data){
    //         node.left = this.removeNode(node.left, value);
    //         return node;
    //     } else if (value > node.data) {
    //         node.right = this.removeNode(node.right, value);
    //         return node;
    //     } else {
    //         if (!node.left && !node.right){
    //             node = null;
    //             return node;
    //         }

    //         else if (!node.left){
    //             node = node.right;
    //             return node;
    //         }

    //         else if (!node.right){
    //             node = node.left;
    //             return node;
    //         }
    //     }
    // }

}