"use strict";
var person = { fName: "John", lName: "Doe" };
var person1 = [];
for (let i = 0; i < 10; i++) {
    person1.push(person);
    document.write(`${person.fName} ${person.lName} <br>`);
}
person1.forEach(function (val) {
    console.log(val.fName);
    setTimeout(() => {
        console.log(val.lName);
    }, 5000);
});
