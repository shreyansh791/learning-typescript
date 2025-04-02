// String datatype

let str1 = 'This is a string created using single quote';
let str2 = "This is a string created using double quote";
let str3 = `This is a string created using back tick`; // recommended approach
let str4 = `This is a line 1 
this is line2`;
let str5 = `string using back tick with ${str1}`;
console.log(str3);
console.log(str4);
console.log(str5);
// using back tick we can write our string in multiple lines and this is the benefit we get when create the string using back tick.

// Number datatype
// The number type represents both integer and floating point number in typescript.

let num = 100; // value can be changed later.
const pi = 3.14 // constant value because creating using const.

/*
One Very Important point which we have to remember is that typescript numbers are always floating type number.
which simply means they always have decimal even if we sometimes don't see it.
*/
let num2 = 12 // this will be saved as a 12.0 in memory.

//  Boolean DataType

//  Type Inference
/* In Typescript, when we assign a value to a variable, the datatype of that variable is
 automatically inferred and set. That datatype can not be changed later in the program
*/






