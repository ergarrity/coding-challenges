// Calculate possible change from combinations of dimes and pennies.

// Given an infinite supply of dimes and pennies, find the different
// amounts of change can be created with exact `num_coins` coins?

// For example, when num_coins = 3, you can create:

//     3 = penny + penny + penny
//    12 = dime + penny + penny
//    21 = dime + dime + penny
//    30 = dime + dime + dime

// For example:

//     >>> coins(0) == {0}
//     True

//     >>> coins(1) == {1, 10}
//     True

//     >>> coins(2) == {2, 11, 20}
//     True

//     >>> coins(3) == {3, 12, 21, 30}
//     True

//     >>> coins(4) == {4, 13, 22, 31, 40}
//     True


// Let's make sure it works when we can spend over 10 pennies::

//     >>> coins(11) == {65, 101, 38, 74, 11, 110, 47, 83, 20, 56, 92, 29}
//     True

function coins(numCoins) {
    let results = new Set;

    for (i = 0; i <= numCoins; i++){
        let numDimes = i;
        let numPennies = numCoins - i;
        results.add(numPennies + 10 * numDimes);
    }
    return results;
}