/*
Using Literal Type we just don't tell what type of value we want to
store in the variable but we tell exactly what value we want to store in a variable or function parameter.
*/

const str = 'Hello World'
let str2 = 'Hello str2'

function roleMessage(role: 'admin' | 'read-only' | 'read-write') {
    switch (role) {
        case 'admin':
            console.log('admin role')
            break;
        case 'read-only':
            console.log('read-only role')
            break;
        case 'read-write':
            console.log('read-write role')
            break;
    }
}

roleMessage('admin')
// roleMessage('cs mc skckms') // compile time error 