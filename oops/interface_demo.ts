export { }
interface User {
    firstName: string;
    lastName: string;
    company?: string // optional property
    greetUser(): void;
    getFullName(): string;
}
class Admin implements User {
    public company?: string | undefined = 'Accenture'; // setting default value
    constructor(public firstName: string, public lastName: string, company?: string) {
    }
    greetUser(): void {
        console.log("Hello Admin");
    }
    getFullName(): string {
        return this.firstName + " " + this.lastName +" and company is "+ this.company
    }

}

class Member implements User {
    constructor(public firstName: string, public lastName: string, public company?:string) {
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
const admin = new Admin("Shreyansh", "Jain" ,"Globant")
const member = new Member("Akshay", "Jain")
displayGreetMessage(admin)
displayGreetMessage(member)
