const user ={ 
    name :"Tanishq",
    age : 25
};

//Object.freeze(user);
Object.seal(user);
user.name = "Ram";
user.age = 20;
user.city = "Chandigarh";
console.log(user);

