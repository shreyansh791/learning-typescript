const personDetails = ['Shreyansh', 'Jain', 'Lucknow']
const [fname, lanme, city] = personDetails
console.log(fname, lanme, city)

const [fname2, , city2] = personDetails
console.log(fname2, city2)

const [fname3, , city3, gender = 'MALE'] = personDetails
console.log(fname2, city2, gender)

// The Destructuring assignment is a special syntax which was introduced in ES6 Version and it allows us to unpack arrays or objects into a bunch of variables.


// object destructuring
// Very important point
// when destructuting an object, variable name must match the name of the property whose value you want to assign to it.
// In case of an object the destructing is done based on the property name.

const employeeData = {
    firstName: 'Akash',
    age: 32,
    city11: 'Delhi'
}

const { firstName, city11: updatedCity } = employeeData
console.log(firstName, updatedCity)
