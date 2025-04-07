export { };
class User {
    name: string;
    age: number;
    gender: string
    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    // Class methods in TypeScript are defined by simply writing the method name followed by parentheses and the method body. The function keyword is not used for class methods.
    greetUser() {
        console.log("hello " + this.name + " with age " + this.age)
    }
}
const user1 = new User('john', 32, 'male');
const user2 = new User('tom', 31, 'male');
const user3 = new User('kary', 30, 'female');

// console.log(user1)
// console.log(user2)
// console.log(user3)

user1.greetUser()
user2.greetUser()
user3.greetUser()
