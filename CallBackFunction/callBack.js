// Function that takes a name and a callback function
const greetUser = (name, callback) => {
    // Create a greeting message
    const greeting = `Hello, ${name}!`;
    
    // Call the callback function with the greeting
    callback(greeting);
};

// Callback function that logs the greeting
const logGreeting = (message) => {
    console.log(message);
};

// Using the greetUser function with the logGreeting callback
greetUser("Alice", logGreeting);
