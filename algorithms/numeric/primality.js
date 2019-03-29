// Write a simple algorithm that determines whether or not a given
// integer is a prime number.

function isPrime(n){
    for(let i = 2; i < n; i++){
        for(let j = 1; j <= Math.sqrt(n); j++){
            if( i * j == n){
                return false;
            }
        }
    }
    return true;
}