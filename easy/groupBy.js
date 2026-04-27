function groupBy(arr, key) {
    const result = {};

    for (let item of arr) {
        let keyValue = item[key];
        if (!result[keyValue]) result[keyValue] = [];
        result[keyValue].push(item);
    }
    return result;
}

// groupBy([
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 25 }
// ], 'age');

// output
// result: {
//     "25": [{
//         name: 'Alice',
//         age: 25
//     },{
//         name: 'Charlie',
//         age: 25
//     }],
//     "30": [{
//         name: 'Bob',
//         age: 30,
//     }]
// }
