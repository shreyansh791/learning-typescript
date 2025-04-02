let num: number[] = [1, 2, 3, 4, 5]
console.log(num[0]);
console.log(num[1]);
let arr: (number | string)[] = ['Shreyansh', '33', 'Raghvendra', '34']
arr.push(`Saurabh`);
arr.push(33);
console.log(arr);
for (let temp of arr) {
    console.log(temp);
}
console.log('****************************')
for (let temp in arr) {
    console.log(arr[temp]);
}

/*
When to use which?
Use for...in when you need to iterate over an object's properties
Use for...of when you need to iterate over values in an array or other iterable
*/



