"use strict";

function computeSumOfSquares(nums) {
    return nums.reduce((acc, num) => acc + (num*num), 0);
}

function printOddNumbersOnly(nums) {
    nums.forEach(e => {
        if (e % 2 == 1) {
            console.log(e);
        }
    });
}

function printFibo(n, a, b) {
    let f = [a, b], i, next;
    for(i=2; i<n; i++) {
        next = a + b;
        f.push(next);
        a = b;
        b = next;
    }
    for(i=0 ; i<n ; i++) {
        console.log(f[i]);
    }
}

console.log( computeSumOfSquares([1, 2, 3]) );
printOddNumbersOnly([1, 2, 3]);
printFibo(6, 0, 1);
