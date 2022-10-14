
const numero = 21;
ehMultiploDe3 = numero % 3 === 0;
ehMultiploDe5 = numero % 5 === 0;

if(ehMultiploDe3 && ehMultiploDe5){
    console.log("FizzBuzz")
} else if (ehMultiploDe5) {
    console.log("Buzz")
} else if (ehMultiploDe3) {
    console.log("Fizz")
} else {
    console.log("numero")
}