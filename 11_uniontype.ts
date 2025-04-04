function printDetails(name: string, salary: number | string) {
    console.log(`Name - ${name} & Salary - ${salary}`)
}

printDetails('Amod', '50000')
printDetails('Saurabh', 20000)

let user: {name:string,age: number} | null = null
user = {name:'Vinod',age: 45}
console.log(user)
user = null
console.log(user)