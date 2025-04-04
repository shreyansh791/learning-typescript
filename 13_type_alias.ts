/* LECTURE 13: UNDERSTANDING TYPE ALIAS */ 

/*type stringType = string;
let str: stringType = 'Hello';

type StringOrNumber = string | number;

function printStatus(message: string, code: StringOrNumber){
    if(typeof code === 'string'){
        console.log(`${message}. Status code: ${code.trim()}`);
    }else{
        console.log(`${message}. Status code: ${code}`);
    }    
}

printStatus('Request was successful', 200);
printStatus('Resource was not found', '404');

type roleType = 'admin' | 'read' | 'read-write';
function roleMessage(role: roleType){
    switch(role){
        case 'admin':
            console.log('You have admin permission on this site.');
            break;
        case 'read':
            console.log('You have read permission on this site');
            break;
        case 'read-write':
            console.log('You have read / write permission on this site');
            break;
        default:
            console.log('unknown user permission');
    }
}

roleMessage('admin');

type User = {firstname: string; lastname: string; age: number}

function getFullName(user: User){
    return user.firstname + ' ' + user.lastname;
}

function isEligibleForVoting(user: User){
    return user.age >= 18;
}

let user: User = {firstname: 'john', lastname: 'smith', age: 32};

console.log(getFullName(user));
console.log(isEligibleForVoting(user));*/

