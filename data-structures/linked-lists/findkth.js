// Implement an algorithm to find the kth to last element of a singly linked list

function findFromEnd(k, lst){
    let counter = 0;
    let temp = lst.head;

    while (temp.next){
        temp = temp.next;
        counter++;
    }

    temp = lst.head;

    while (counter >= k){
        temp = temp.next;
        counter--;
    }
    return temp;
}