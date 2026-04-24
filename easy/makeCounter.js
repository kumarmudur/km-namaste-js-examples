function makeCounter(initialValue = 0) {
    // Your implementation

    let count = initialValue;

    return {
        increment: function() {
            count++;
            return count;
        },

        decrement: function() {
            count--;
            return count;
        },

        reset: function() {
            count = initialValue;
            return count;
        },

        getValue: function() {
            return count;
        }
    }
}

const counter = makeCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.getValue());

