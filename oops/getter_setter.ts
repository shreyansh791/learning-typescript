
/***************************************************
 * *********LECTURE 44: GETTER & SETTER*************
 ***************************************************/
export { };

class Person {
    public name: string;
    private _age: number | null = null;

    get age(){
        if(this._age != null){
            return this._age;
        }
        throw new Error('Age is not defined for person: ' + this.name)

    }
    set age(value: number){
        if(value > 0)
            this._age = value;
        else
            throw new Error('Age cannot be a negative value.')
    }

    constructor(name: string){
        this.name = name;
    }
}

const person = new Person('john');
person.age = 10;
console.log(person.age);

class Circle {
    constructor(private _radius: number) {
    }
    get radius() {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    set diameter(value: number) {
        this._radius = value / 2;
    }
}
const c = new Circle(10)
console.log(c.radius)
console.log(c.diameter)
