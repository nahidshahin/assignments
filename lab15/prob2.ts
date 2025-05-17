function secondLargest(numbers: number[]): number {
    if (numbers.length < 2) {
        throw new Error("At least 2 numbers needed");
    }

    let max = -Infinity;
    let max2 = -Infinity;

    numbers.forEach(n => {
        if (n > max) {
            max2 = max;
            max = n;
        } else if (n > max2 && n !== max) {
            max2 = n;
        }
    });

    return max2;
}

console.log(secondLargest([20, 120, 111, 215, 54, 78]));