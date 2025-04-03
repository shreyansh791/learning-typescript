/*
Typescript has a feature called Tuple.
Typescript tuple is a fixed length, ordered collection of elements where each elements has specific type.
When we specify the datatype of each element then it becomes Tuple.
*/

let data: [string,number,boolean] = ['shre',33,true]

data = ['ragh',34,true,123] // error Source has 4 element(s) but target allows only 3

data.push(12); // it works and will push the value to tuple.