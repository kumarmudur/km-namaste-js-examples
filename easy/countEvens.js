function countEvens(arr) {
    if (!Array.isArray(arr)) return false;
    if (arr.length === 0) return 0;

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (typeof value !== 'number' || !Number.isFinite(value)) return false;
        if (Number.isInteger(value) && value % 2 === 0) count++;
    }
    return count;
}

console.log(countEvens([1,2,3,4, 5, 6]));