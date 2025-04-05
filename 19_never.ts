function sum(num1: number, num2: number): void {
    console.log(num1 + num2);
}

function sum2(message:string): never {
    // throw { msg: (num1 + num2) + 'Error' }
    throw new Error(message);
}
console.log(sum(10, 20)) // prints undefined.
console.log(sum2("Testing")) // throws error.