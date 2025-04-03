/**
 * Enum is basically a collection of named value.
 * 
 */

enum Roles {
    QA, DEVOPS, DEV, BA
}
const user = {
    name: 'Shreyansh',
    age: 33,
    city: 'Lucknow',
    role: Roles.QA
}
if (user.role === Roles.QA) {
    console.log(`Role is QA`);
}