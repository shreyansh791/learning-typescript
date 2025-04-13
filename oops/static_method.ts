/***************************************************
 * ****LECTURE 45: STATIC METHODS & PROPERTIES******
 ***************************************************/
export { }
class Employee {
    public static count: number = 0;

    constructor(public firstname: string, public lastname: string) {
        Employee.count++
    }

    static sayHello() {
        return 'Hi There!';
    }
    static getaCount() {
        return Employee.count;
    }
}

const emp1 = new Employee('john', 'smith');
console.log(Employee.count);

const emp2 = new Employee('john', 'smith');
console.log(Employee.count);

const emp3 = new Employee('john', 'smith');
console.log(`Employee count is ${Employee.count}`);

console.log(Employee.sayHello());
console.log(Employee.getaCount());
