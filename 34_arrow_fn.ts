

function sum(num1: number, num2: number) {
    return num1 + num2
}

const fn = (num1: number, num2: number) => {
    return num1 + num2
}

const fn2: (num1: number, num2: number) => number = (num1, num2) => num1 + num2
console.log(sum(10, 20))
console.log(fn(10, 20))
console.log(fn2(20, 40))
