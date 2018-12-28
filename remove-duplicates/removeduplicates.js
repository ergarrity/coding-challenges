// Remove duplicates in a list

// For example::

//     >>> remove_duplicates([6, 9, 7, 9, 2, 6, 0])
//     [6, 9, 7, 2, 0]

//     >>> remove_duplicates([])
//     []

//     >>> remove_duplicates([6, 9, 7])
//     [6, 9, 7]

function removeDuplicates(lst) {

    let result = []
    
    let itemsSet = new Set([]);

    for ( i = 0; i < lst.length; i++) {
        let item = lst[i]
        if (itemsSet.has(item)){
            continue;
        } else {
            result.push(item);
            itemsSet.add(item);
        }
    }
    return result;
}