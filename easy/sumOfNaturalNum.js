// sum of n natural numbers

// solution 1:  Recursion
// time: O(N) | space: O(N)
function sumN(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) return false;
    if (n === 0) return 0;
    return n + sumN(n - 1);
}

// solution 2: Mathematical formula
// time: O(1) | space: O(1)
function sumN1(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) return false;
    if (n === 0) return 0;
    return (n * (n + 1)) / 2;
}

// solution3: Iterative approach
// time: O(N) | space: O(1)
function sumN2(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) return false;
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

