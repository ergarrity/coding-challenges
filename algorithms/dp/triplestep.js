// Write a function to count how many possible ways a child can
// run up a set of n steps taking either 1 step, 2 steps, or 3
// steps at a time.

function countWays(n){
    return helper(n, []);
}

function helper(n, memo){
    if(n < 0) return 0;
    if(n == 0) return 1;

    if(!memo[n]){
        memo[n] = helper(n - 1, memo) + helper(n - 2, memo)
        + helper(n - 3, memo);
    }
    return memo[n];
}