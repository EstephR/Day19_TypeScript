var names: string[] = ["Igor", "Stephan", "Sven", "Petra", "Stefan"];
//Index
for (let index in names) {
    console.log(index);
}

//Value
for (let val of names) {
    console.log(val);
}

//Value and Index
names.forEach(function(val, index) {
    console.log(val, index);
})