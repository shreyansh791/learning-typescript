/*********************************************
 * LECTURE 6: OBJECT TYPE IN TYPESCRIPT
 ********************************************/

let person = {
    name: 'John',
    age: 30,
    address: {
        city: 'london',
        country: 'UK'
    }
}

console.log(person.name);
console.log(person["age"]);
console.log(person.address.city);
console.log(person["address"]["city"]);
console.log(person["address"].country);


// Below will give error because address object is missing and we are overriding the person
/*
person = {
    name: 'John',
    age: 30

}
    */
