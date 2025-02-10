// const arr = [1,2,3,4,5]
// const res = arr.filter(arr => arr %2 ==0);
// console.log(res);


const person = [
    {name: 'alice', age: 15 },
    {name: 'David', age: 18},
    {name: 'Joe', age:25}
];


const adult = person.filter(person => person.age>=18);

console.log(adult);