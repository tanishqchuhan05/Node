const arr =[
    {name: "Tanishq", age: 25},
    {name: "Sahil", age: 21},
    {name: "Rahul", age: 29}
];

const res = arr.filter(arr => arr.age>=25).map(arr => arr.name)

console.log(res);