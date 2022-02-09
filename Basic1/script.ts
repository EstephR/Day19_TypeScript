var array: number[] = [];

// Push numbers from 1 to 10 into array
for (let i = 1; i <= 10; i++) {
    array.push(i);
}

//Other loop
for (let j = 0; j < array.length; j++) {
    //Inner Loop
    for (let i = 0; i < array.length; i++) {
    var result = array[i]*array[j];
    var text = `${array[i]}x${array[j]} = ${result}` 
    console.log(text);
    
}
}


