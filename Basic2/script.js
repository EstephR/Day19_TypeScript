var person = { fName: "John", lName: "Doe" };
var person1 = [];
for (var i = 0; i < 10; i++) {
    person1.push(person);
    document.write("".concat(person.fName, " ").concat(person.lName, " <br>"));
}
person1.forEach(function (val) {
    console.log(val.fName);
    setTimeout(function () {
        console.log(val.lName);
    }, 5000);
});
