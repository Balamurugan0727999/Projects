const user = [{
   id: 101,
   name: "Francis",
   age: 20,
   hobbies: ["Traveling", "Photography"]
},
{
   id: 103,
   name: "Tyson",
   age: 29,
   hobbies: ["Gaming", "Music", "Cricket"]
},
{
   id: 103,
   name: "Matt",
   age: 25,
   hobbies: ["Gaming", "Dancing", "Singing"]
}
];

// Object → String
const jsonText = JSON.stringify(user);

//console.log(jsonText);

/*for(let users of user){
   console.log(users)
}*/

for (let i = 0; i < user.length; i++) {
   for (let j = 0; j < user[i].hobbies.length; j++) {
      console.log((user[i].name) + ":", user[i].hobbies[j])
   }
}
//console.log(user[2].hobbies[2])