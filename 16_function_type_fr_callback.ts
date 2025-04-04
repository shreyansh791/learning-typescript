
function getResult(salary: number, bonus: number, print: (data: string, sum: number) => void) {
    print("Total Salary - ", (salary + bonus))
}

function display(data: string, sum: number) {
    console.log(data, sum)
}
getResult(10000, 2000, display)