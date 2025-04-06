const personDetails = ['Shreyansh', 'Jain', 'Lucknow']
const [fname, lanme, city] = personDetails
console.log(fname, lanme, city)

const [fname2, , city2] = personDetails
console.log(fname2, city2)

const [fname3, , city3, gender = 'MALE'] = personDetails
console.log(fname2, city2, gender)

// The Destructuring assignment is a special syntax which was introduced in ES6 Version and it allows us to unpack arrays or objects into a bunch of variables.



