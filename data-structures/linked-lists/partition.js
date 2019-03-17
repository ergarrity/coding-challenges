/* Write code to partition a linked list around a value x,
such that all nodes less than x come before all nodes greater
than or equal to x. If x is contained within the list, the
values of x only need to be after the elements less than x.
The partition element x can appear anywhere in the "right
partition"; it does not need to appear between the left and
right partition. */

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function partitionList(value, node){
    let secondHalf = null;
    let firstHalf = null;
    let temp = node;

    while (temp) {
        if (temp.data >= value){
            if (!secondHalf){
                secondHalf = temp;
                secondHalf.next = null;
                temp = temp.next;
            } else {
                secondHalf.next = temp;
                secondHalf = secondHalf.next;
                secondHalf.next = null;
                temp = temp.next;
            }
        } else {
            if (!firstHalf){
                firstHalf = temp;
                firstHalf.next = null;
                temp = temp.next;
            } else {
                firstHalf.next = temp;
                firstHalf = firstHalf.next;
                firestHalf.next = null;
                temp = temp.next;
            }
        }
    }
    firstHalf.next = secondHalf;
    return firstHalf;
}
