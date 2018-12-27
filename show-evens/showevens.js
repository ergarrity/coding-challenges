// Given list of ints, return list of *indices* of even numbers in list.

// For example::

//     >>> show_evens([])
//     []

//     >>> show_evens([2])
//     [0]

//     >>> show_evens([1, 2, 3, 4])
//     [1, 3]

function showEvens(nums) {
    let results = [];

    for ( i = 0; i < nums.length; i++){
        if (nums[i] % 2 === 0) {
            results.push(i);
        }
    }
    return results;
}