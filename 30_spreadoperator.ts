/**
 * What is Spread operator?
Spread Operator in Typscript allows you to extract elements from an array or properties from an object. It is denoted by three dots (...)
 *  */
export { };
//  This turns your file into a module with its own scope, preventing variable conflicts.

const users: string[] = ['Shreyansh', 'Raghvendra', 'Saurabh']
console.log(...users)
console.log([...users])

// creating a shallow copy of an array.
const copyArray = [...users]
copyArray.push('Sarjit')
console.log("copyArray ", copyArray)
console.log("original array ", users)

// create an array from existing array.
const extendedUsers: string[] = ['Mayank', 'Aquib', ...users]
console.log(extendedUsers)

//  spread operator on object

let person:{} =
{
    fname: 'Shreyansh',
    company: 'JPMC'
}

 person = { ...person, salary: 10000 }
 console.log(person)



