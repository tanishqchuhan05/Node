const fetchUser = (userId, callback) =>{
  console.log(`Fetching the data for userId: ${userId}...`)

  setTimeout(()=>{
const userData={
    id: userId,
    name: "Tanishq",
    email:"tan@gmail.com"
};

callback(userData);
  },2000);
};

const processUserData = (data)=>{
    console.log("User Data Retrieved ")
    console.log(`id: ${data.id}`);
    console.log(`name: ${data.name}`);
    console.log(`email: ${data.email}`)
}


fetchUser(1, processUserData);