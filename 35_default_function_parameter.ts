function printDetails(name: string, age: number, gender: string = 'Male') {
    console.log(`name is ${name} with age ${age} and gender is ${gender}`)
}

printDetails('Shreyansh', 33)
printDetails('Raghu', 34, 'male')
printDetails('Sonal', 30, 'female')


// In the type definition, gender?: string means "gender is optional and when provided, it should be a string"
const printData: (name: string, age: number, gender?: string) => void = (name: string, age: number, gender: string = 'Male') => {
    console.log(`name is ${name} with age ${age} and gender is ${gender}`)
}

printData('Mohan', 50)
printData('Rekha', 52, 'female')


const printData2 = (name: string, age: number, gender?: string) => {
    console.log(`name is ${name} with age ${age} and gender is ${gender}`)
}
printData('a',11,'female')
printData('b',12,'male')