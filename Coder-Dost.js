// 1. Convert ( ARRAY ) to ( OBJECT ) in JAvaScript 
// Ans : 
const arr = ['a','b','c'];

let obj = arr.reduce((accumulator, iterator)=>{
    return({...accumulator,[iterator]:iterator})
},{});
// console.log("converting to object with reduce ", obj);
// converting to object with reduce  { a: 'a', b: 'b', c: 'c' } in {key:value} pair...

// -------------------------------------------------------------------------------------------------------------------


