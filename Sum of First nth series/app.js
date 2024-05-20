function nthTermOfSeries(n) {
    if (n <= 0) {
        return 0; // If n is less than or equal to 0, return 0
    }
    
    // Arithmetic sequence parameters
    let a = 1; // First term
    let d = 1; // Common difference
    
    // Sum of the first n terms of the arithmetic sequence
    let sum = (n / 2) * (2 * a + (n - 1) * d);
    
    return sum;
}

// Example usage:
let n = 5;
console.log(`The sum of the first ${n} terms of the sequence is:`, nthTermOfSeries(n));
