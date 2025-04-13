export{}
abstract class Employee{
    public firstname: string;
    public lastname: string;

    abstract getSalary(): number;

    constructor(fn: string, ln: string){
        this.firstname = fn;
        this.lastname = ln;
    }
}

class PermanentEmployee extends Employee{
    monthlySalary: number;
    constructor(fn: string, ln: string, salary: number){
        super(fn, ln);
        this.monthlySalary = salary;
    } 

    getSalary(): number {
        return this.monthlySalary * 12;
    }
}

class ContractEmployee extends Employee{
    getSalary(): number {
        return this.hourlySalary * 9 * 365;
    }
    hourlySalary: number;

    constructor(fn: string, ln: string, salary: number){
        super(fn, ln);
        this.hourlySalary = salary;
    }

    
}

const emp1 = new PermanentEmployee('john', 'smith', 10000);
console.log(emp1.getSalary());

const emp2 = new ContractEmployee('mark', 'vought', 20);
console.log(emp2.getSalary());
