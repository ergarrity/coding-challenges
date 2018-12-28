// Given a list of numbers 1...max_num, find which one is missing.

//     *nums*: list of numbers 1..[max_num]; exactly one digit will be missing.
//     *max_num*: Largest potential number in list

//     >>> missing_number([7, 3, 2, 4, 5, 6, 1, 9, 10], 10)
//     8


function missingNumber(nums, maxNum) {

    let numsObj = new Object();
    
    for ( i = 1; i <= maxNum; i++){
        numsObj[i] = false;
    }
    
    for ( i = 0; i < nums.length; i++){
        let index = nums[i];
        numsObj[index] = true;
    }

    for (key in numsObj) {
        if (numsObj[key] === false) {
            return Number(key);
        }
    }
}

