type User = { name: string, age: number }
let greet: (user: User) => void

function isEligible(user: User) {
    console.log(user.age >= 18)
}
function printDetails(user: User) {
    console.log(user.name, user.age);
}
greet = isEligible
let user = { name: 'Shreyansh', age: 33 }
greet(user)

greet = printDetails
greet(user)