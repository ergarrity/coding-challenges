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

// BinarySearchTree.prototype.remove = function(value){
//     let nodeToRemove = this.findNode(value);

//     if (!nodeToRemove){
//         return false;
//     }

//     let parent = this.findParent(value);

//     if (!parent) {
//         this.root = null;
//     }

//     else if (!nodeToRemove.left && !nodeToRemove.right){
//         if (nodeToRemove.value < parent.value){
//             parent.left = null;
//         } else {
//             parent.right = null;
//         }
//     }
//     else if (!nodeToRemove.left && nodeToRemove.right){
//         if (nodeToRemove.value < parent.value){
//             parent.left = nodeToRemove.right;
//         }
//         else {
//             parent.right = nodeToRemove.right;
//         }
//     }
//     else if (nodeToRemove.left && !nodeToRemove.right){
//         if (nodeToRemove.value < parent.value){
//             parent.left = nodeToRemove.left;
//         }
//         else {
//             parent.Right = nodeToRemove.right;
//         }
//     }
//     else if (nodeToRemove.left && nodeToRemove.right){
//         if (nodeToRemove.value < parent.value){
//             parent.left = nodeToRemove.left;
//         }
//         else {
//             parent.right = nodeToRemove.left;
//         }
//     }
//     else {
//         let largestValue = nodeToRemove.left;
//         while (largestValue.right){
//             largestValue = largestValue.right;
//         }
//         this.findParent(largestValue.value).right = null;
//         nodeToRemove.value = largestValue.value;
//     }
// }

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
        return null;
    } 
    else if (value == node.data){
        return null;
    }
    else if (value < node.data){
        if (!node.left){
            return null;
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
        return null;
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

