
const mySym = Symbol ("Key1");

const user={
name : "Tanishq",
age : 25,
email : "tanishq@gmail.com",
[mySym] : "Key1"

};

// console.log(user["email"]);
// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user[mySym]);

console.log(Object.values(user));
console.log(Object.keys(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('email'));
