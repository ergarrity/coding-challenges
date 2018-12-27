// Reverse a string using recursion.

// For example::

//     >>> rev_string("")
//     ''

//     >>> rev_string("a")
//     'a'

//     >>> rev_string("porcupine")
//     'enipucrop'

function revString(str){
    if (str.length <= 1){
        return str;
    }
    return str.slice(-1) + str.slice(0, -1)
}