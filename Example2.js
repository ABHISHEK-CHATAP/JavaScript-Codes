// Code Quality in 3 phases 
    //  level - 0 
    //  level - 1
    //  level - 2


//  WHAT WE LEARN IN THIS SHEDULE 

// for() loop ,forEach() , map(), filter(), sort()  

// use cases :

// 1. write code to get (array of names) from given array of users
// 2. get back only (active) users
// 3. sort users by age descending...


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
        age:25
    },
     {
        id:4,
        name:"harsh",
        isActive: false,
        age:30
    }
];

// Ans :- 
// ---------------------------------------------------------------------------------

// 1. write code to get (array of names) from given array of users

// level -0 
const names=[];
for(i=0;i<users.length;i++){
    names.push(users[i].name);
}
// console.log(names);  //[ 'Abhishek', 'Ayush', 'Akshay', 'harsh' ]


// level - 1
 users.forEach(user => names.push(user.name));
// console.log(names);     (4) ['Abhishek', 'Ayush', 'Akshay', 'harsh']


// level -2 
const use =users.map((name)=>{
    return(name.name)
})
// console.log(use);          [ 'Abhishek', 'Ayush', 'Akshay', 'harsh' ]



// ----------------------------------------------------------------------------------

// 2. get back only (active) users

// level -0 
for(i=0;i<users.length;i++){
    if(users[i].isActive){
        names.push(users[i].name);
    }
}
// console.log(names);    //(3) ['Abhishek', 'Ayush', 'Akshay']


// level - 2
users.forEach((user) =>{
    if(user.isActive){
        names.push(user.name);
    }
})
// console.log(names);    //(3) ['Abhishek', 'Ayush', 'Akshay']


         // {{{{{{{{{{{{{}}}}}}}}}}}}

         // // map() method returns new array BUT 
// // forEach() method doenn't return new array

// // agar aap forEach() kisi constant me store krne ki 
// // koshish krte ho toh kaam nahi aayega

// // const ab = users.forEach((user) =>{
// //     if(user.isActive){
// //         names.push(user.name);
// //     }
// // })
// // console.log("constant attay",ab);

// // it's not working    

            //   {{{{{{{{{{{}}}}}}}}}}}}




// level - 3
const ab = users.filter((user)=> user.isActive);
// console.log("filter",ab);
// filter [
//     { id: 1, name: 'Abhishek', isActive: true, age: 23 },
//     { id: 2, name: 'Ayush', isActive: true, age: 21 },
//     { id: 3, name: 'Akshay', isActive: true, age: 21 }
//   ]

const bc = ab.map((user)=> user.name);
// console.log('mapped array',bc);     //mapped array [ 'Abhishek', 'Ayush', 'Akshay' ]


// in short ( level - 3 )  solution
const names1 = users.filter((user)=> user.isActive).map((user)=> user.name);
// console.log("method chaining solution", names1);  
// method chaining solution [ 'Abhishek', 'Ayush', 'Akshay' ]


// ----------------------------------------------------------------------------------

// 3. sort users by age descending...
// level - 0
const desc = users.sort((a,b)=> a.age < b.age ? 1 : -1);
// console.log("descending order", desc);
// descending order [
//     { id: 4, name: 'harsh', isActive: false, age: 30 },
//     { id: 3, name: 'Akshay', isActive: true, age: 25 },
//     { id: 1, name: 'Abhishek', isActive: true, age: 23 },
//     { id: 2, name: 'Ayush', isActive: true, age: 21 }

// bs 1 ko -1 and -1 kpo 1 karo descending and scending ho jayegi


// ----------------------------------------------------------------------------------




// overall onclusion in method chaining...

const names10 =
 users.filter((user)=> user.isActive)
      .sort((a,b)=> a.age < b.age ? 1 : -1)
      .map((user)=> user.name);

    //   console.log( "method chaining all methods" , names10);
    //   method chaining all methods [ 'Akshay', 'Abhishek', 'Ayush' ]

    //  {{{{{{       isActive --> descending --> name         }}}}}}