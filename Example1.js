// Code Quality in 3 phases 
    //  level - 0 
    //  level - 1
    //  level - 2


//  WHAT WE LEARN IN THIS SHEDULE 

// Set Object , Includes() , some(), reduce(), find(), findIndex(), concat(), push()    

// use cases :

// 1. Check If user with such name exists :
// 2. Adding element to the array 
// 3. Remove Duplicates element in the array
// 4. concatinating the array

const users = [
    {
        id:1,
        name:"Abhishek",
        isActive: true,
        age:23
    },
     {
        id:2,
        name:"Ayush",
        isActive: true,
        age:21
    },
     {
        id:3,
        name:"Akshay",
        isActive: true,
        age:21
    },
     {
        id:4,
        name:"harsh",
        isActive: false,
        age:22
    }
];

// Ans :- 
// ----------------------------------------------------------------------
// 1. Check If user with such name exists :

// level - 0 :------------------------------
const isNameExist=(name, users)=>{
   let exist=false;
   for(let i=0; i<users.length; i++){
    if(users[i].name === name){
        return exist=true;
    }
   }
   return exist;
}
// isNameExist("Ayush", users);
// true



// level - 1--------------------------------
const isNameExist1=(name, users)=>{
 const user = users.find(user=> user.name === name) ;
//  return user
// pura object value return kr raha user return kia toh

return Boolean(user)
}
// isNameExist1("Ayush", users);
// {id: 2, name: 'Ayush', isActive: true, age: 21}

// isNameExist1("harsh", users);   //true



// level - 2 ----------------------------------
const isNameExist2=(name, users)=>{
    const user = users.some(user=> user.name === name) ;
   return user
   }
//    isNameExist2("Abhishek", users);
//    true


// ---------------------------------------------------------------------------------------------------

// 2. Adding element to the array 
// level - 0
const arr = [1,3];
const append =(arr,ele)=>{
  arr.push(ele);
  return arr;
}
// console.log(append(arr,5)); // [ 1, 3, 5 ]
// console.log(arr);   //[ 1, 3, 5 ]

// But ye existing array ko update kr raha hai  

// aaisa code chahiye jo naya array banaye existing array ko changer na kare




// level - 1
const append1 =(arr,ele)=>{
    return [...arr,ele];
  }
// console.log(append1(arr,4));  //[ 1, 3, 4 ]
// console.log(arr);   //[ 1, 3 ]



// ---------------------------------------------------------------------------------------------------


// 3. Remove Duplicates element in the array
// level - 0

const array = [1,2,"Abhi",3,3,4,4,"Ayush",5,7,7,9,"Abhi",10,10];

const unique=()=>{
    const uniqueElements = [];
    array.forEach((ele)=>{
        if(!uniqueElements.includes(ele)){
            uniqueElements.push(ele)
        }
    })
    return uniqueElements;
}
// console.log(unique(array));
//[ 1, 2, 'Abhi', 3, 4, 'Ayush', 5, 7, 9, 10 ]





// level - 1 ***************************************
const remove =(array)=>{
return [...new Set(array)]
}
// console.log(remove(array));
 //[ 1, 2, 'Abhi', 3, 4, 'Ayush', 5, 7, 9, 10 ]


// ---------------------------------------------------------------------------------------------------



// 4. concatinating the array
const arrA = [1,2];
const arrB = [8,9];
const mergeArray =(arrA, arrB)=>{
    return [...arrA,...arrB]
}
// console.log(mergeArray(arrA,arrB)); //[1, 2, 8, 9]



// ---------------------------------------------------------------------------------------------------












