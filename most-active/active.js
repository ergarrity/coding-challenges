// Find window of time when most authors were active.

// For example::

//     >>> data = [
//     ...    ('Alice', 1901, 1950),
//     ...    ('Bob',   1920, 1960),
//     ...    ('Carol', 1908, 1945),
//     ...    ('Dave',  1951, 1960),
//     ... ]

//     >>> most_active(data)
//     (1920, 1945)

// (Alice, Bob, and Carol were all active then).

// If there's more than one period, find the earliest::

//     >>> data = [
//     ...    ('Alice', 1901, 1950),
//     ...    ('Bob',   1920, 1960),
//     ...    ('Carol', 1908, 1945),
//     ...    ('Dave',  1951, 1960),
//     ...    ('Eve',   1955, 1985),
//     ... ]

//     >>> most_active(data)
//     (1920, 1945)

// (Alice, Bob, Carol were active 1920-1945. Bob, Dave, and Eve were active 1951-1960.
// Since there's a tie, the first was returned)

function mostActive(bioData){
    let maxActive = 0;
    let startYear, endYear, countActive;

    for ( i = 1900; i < 2000; i++){
        
        let numActive = 0;
        
        for ( j = 0; j < bioData.length; j++){
            if (bioData[j][1] <= i && bioData[j][2] >= i) {
                numActive += 1;
            }
        }

        if (numActive > maxActive){
            maxActive = numActive;
            startYear = i;
            countActive = true;
        }

        if (numActive < maxActive && countActive === true){
            countActive = false;
            endYear = i - 1;
        }
    }
    return startYear.toString() + ', ' + endYear.toString();
}