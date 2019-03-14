// Write code to remove duplicates from an unsorted singly linked list.

function removeDups(lst){
    let seen = new Set([]);
    let current = lst.head;
    let prev = null;

    while (current.next){
        if (seen.has(current.data)){
            previous.next = current.next;
        } else {
            seen.add(current.data);
            previous = current;
        }
        current = current.next;
    }
    if (seen.has(current.data)){
        previous.next = null;
    }
}