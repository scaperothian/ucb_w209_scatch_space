function Person(_first_name = "John") {
    const name = _first_name;
    let age=15; 
    let person = {}

    function sayName() {
        console.log(`${name} is ${age} years old`);
    }

    person.add15 = function() {
        age += 15
    }

    person.setAge = (_age_change) => {
        age = _age_change
        return person
    }

    person.getAge = () => {
        return age
    }

    person.fancySetAge = (_age_change) => {
        if (_age_change===undefined) {
            return age
        } else {
            age = _age_change
        }
    }

    person.fancierSetAge = (_age_change) => (_age_change === undefined) ? age : ((age = _age_change, person));

    //object 
    person.sayName = sayName

    return person;
}

const p1 = Person("Steve")
p1.sayName()
p1.add15()
p1.sayName()
console.log("p1:",p1.getAge())

const p2 = Person("Jimmy")
p2.sayName()

//adds 15, age is now 30
p2.add15()
p2.sayName()

//does nothing, age is now 30
p2.fancySetAge()
p2.sayName()

//adds 15, age is now 45
p2.add15()
p2.sayName()

//adds 45 to 45  should be 90
p2.fancySetAge(p2.getAge()+45)
p2.sayName()

//adds 15 to 90 should be 105
p2.add15()
p2.sayName()
console.log("p2:",p2.getAge())

const p3 = Person()
p3.sayName()
p3.add15()
p3.sayName()
p3.setAge(26)
p3.sayName()
p3.add15()
console.log(p3.getAge())

p3.setAge(1000).sayName()
p3.fancierSetAge(50)
p3.sayName()

const onClick = () => {
    console.log("Hola John");
}

const btn = document.querySelector("#btn");
console.log('before')
btn.addEventListener("click",onClick)
console.log('after')

//debugger;
