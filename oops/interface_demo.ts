export { }
interface User {
    firstName: string;
    lastName: string;
    greetUser(): void;
    getFullName(): string;
}
class Admin implements User {
    constructor(public firstName: string, public lastName: string) {
    }
    greetUser(): void {
        console.log("Hello Admin");
    }
    getFullName(): string {
        return this.firstName + " " + this.lastName
    }

}

class Member implements User {
    constructor(public firstName: string, public lastName: string) {
    }
    greetUser(): void {
        console.log("Hello Member");
    }
    getFullName(): string {
        return this.firstName + " " + this.lastName
    }

}
function displayGreetMessage(user: User) {
    user.greetUser();
    console.log(user.getFullName());
}
const admin = new Admin("Shreyansh", "Jain")
const member = new Member("Akshay", "Jain")
displayGreetMessage(admin)
displayGreetMessage(member)