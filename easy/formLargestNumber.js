function formLargestNumber(arr) {
    const nums = arr.map(num => num.toString());

    //sort using custom comparator
    nums.sort((a, b) => a.localeCompare(b));

    if (nums[0] === '0') return '0';

    return nums.join('');
}

console.log(formLargestNumber([3, 30, 34, 5, 0, 9]));