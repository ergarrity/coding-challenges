// Write a function that returns the greatest common denominator
// of two input integers

function greatestCommonDenominator(m, n){
    if(n == 0) return m;
    return greatestCommonDenominator(n, m % n);
}