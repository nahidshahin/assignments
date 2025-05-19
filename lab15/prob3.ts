function sum(...numbers: number[]): number {
    if (numbers.length < 1) {
        throw new Error("At least 1 number needed");
    }

    return numbers.reduce((s, n) => s + n, 0);
}

console.log(sum(20, 120, 111, 215, 54, 78));