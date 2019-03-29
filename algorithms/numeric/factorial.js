// Write a function that returns the factorial of an integer input

function factorial(n){

    if(n < 2) return 1;

    let ans = 1;

    for(let i = 2; i <= n; i++){
        ans *= i;
    }
    
    return ans;
}