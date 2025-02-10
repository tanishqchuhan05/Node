function createPerson(name, age){
    return {
        name:name,
        age:age,
        greet: function(){
            console.log(`hello ${this.name}`);
            
        }
    };
}


const person1 = createPerson('David', 23);
person1.greet();