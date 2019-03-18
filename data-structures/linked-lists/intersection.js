/* Given two (singly) linked lists, determine if the two lists intersect.
Return the intersecting node. Note that the intersection is defined based
on reference, not value. That is, if the kth node of the first linked list
is the exact same node (by reference) as the jth node of the second linked
list, then they are intersecting. */

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function findIntersection(headA, headB){
    let seen = new Set([]);

    let temp = headA;

    while(temp){
        seen.add(temp);
        temp = temp.next;
    }

    temp = headB;

    while(temp){
        if (seen.has(temp)){
            return temp;
        }
        temp = temp.next;
    }
    return "No intersecting nodes";
}