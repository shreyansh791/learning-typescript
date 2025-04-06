export { };
let [a, b, ...rest] = [1, 2, 3, 4, 5]

console.log(rest)

let arr = [10, 20, ...rest]
console.log(arr)

function addNumbers(...numbers: number[]) {
    let count = 0;

    for (let temp of numbers)
        count = count + temp

    console.log("Sum ", count);
}

addNumbers(1, 2, 3)
addNumbers(1, 2, 3, 4, 5)
addNumbers(10, 20, 30)