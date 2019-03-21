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

    findParent(value, node = this.root){
        if (!node){
            return null;
        }

        if (value == node.data){
            return null;
        }

        if (value < node.data){
            if (!node.left){
                return null;
            }

            if (value == node.left.data){
                return node;
            }

            return this.findParent(value, node.left);
        } else {
            if (!node.right){
                return null;
            }

            if (value == node.right.data){
                return node;
            }

            return this.findParent(value, node.right);
        }
    }

    findNode(value, node = this.root){
        if (!node){
            return null;
        }

        if (value == node.data){
            return node;
        }

        if (value < node.data){
            return this.findNode(value, node.left);
        } else {
            return this.findNode(value, node.right);
        }
    }

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

    findMin(){
        if (!this.root){
            return null;
        }

        let temp = this.root;

        while(temp.left){
            temp = temp.left;
        }
        return temp.data;
    }

    findMax(){
        if (!this.root){
            return null;
        }

        let temp = this.root;

        while(temp.right){
            temp = temp.right;
        }
        return temp.data;
    }

}