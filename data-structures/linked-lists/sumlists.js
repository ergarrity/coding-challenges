/* You have two numbers represented by a linked list, where each node
contains a single digit. The digits are stored in reverse order, such
that the 1's digit is at the head of the list. Write a function that adds
the two numbers and returns the sum as a linked list. */
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function addNums(headA, headB){
    let multiplier = 1;
    let temp = headA;
    let sum = 0;
    // let maxMultiplier = 0;
    // let resultHead = null;
    // let resultBody = null;
    
    while(temp){
        sum += temp.data * multiplier;
        temp = temp.next;
        multiplier *= 10;
    }

    temp = headB;
    multiplier = 1;

    while(temp){
        sum += temp.data * multiplier;
        temp = temp.next;
        multiplier *= 10;
    }

    // while (sum > 0){
    //     let data = sum % 10;
    //     if(!resultHead){
    //         resultHead = new Node(data);
    //         resultHead.next = resultBody;
    //     } else {
    //         if(!resultBody){
    //             resultBody = new Node(data);
    //         } else {
    //         resultBody.next = new Node(data);
    //         resultBody = resultBody.next;
    //         }
    //     }
    // }
    return sum;
} 

let A = new Node(7);
let B = new Node(1);
let C = new Node(6);
A.next = B;
B.next = C;

let D = new Node(5);
let E = new Node(9);
let F = new Node(2);
D.next = E;
E.next = F;