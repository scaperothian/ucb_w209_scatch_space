console.log("Hola John!")
//const body = document.querySelector("body");
//body.style.backgroundColor = "steelblue"

const hisname = "John";
const age = 15;

console.log(`${hisname} is ${age} years old`);

const person = {
    name: "John",
    age: 15,
};

console.log("person",person)

const people = [person, 1, 23]

console.log("people",people)

console.log(`${person.name} is ${person.age} years old`);

console.log("people",people[0].name)

function add15(d) {
    return d+15
};

console.log("add15(15)=", add15(person.age))

function sayName(person) {
    console.log(`${person.name} is ${person.age} years old`);
}; 

const b = sayName(person);

