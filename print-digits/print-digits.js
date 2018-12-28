// Given int, print each digit in reverse order, starting with the ones place.

// For example::

//     >>> print_digits(1)
//     1

//     >>> print_digits(413)
//     3
//     1
//     4

//     >>> print_digits(7331)
//     1
//     3
//     3
//     7

function printDigits(num) {
    
    let digitsList = num.toString().split('')

    for ( i = (digitsList.length-1); i >= 0; i--) {
        console.log(Number(digitsList[i]));
    }
}