var array: number[] = [];

// Push numbers from 1 to 10 into array
for (let i = 1; i <= 10; i++) {
    array.push(i);
}

//Other loop
for (let j: number = 0; j < array.length; j++) {
    //Inner Loop
    for (let i: number = 0; i < array.length; i++) {
    var result: number = array[i]*array[j];
    var text: string = `${array[i]}x${array[j]} = ${result}` 
    console.log(text);
    
}
}


