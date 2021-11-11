const sumar = (num1, num2)=> {
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2)=> {
    return parseInt(num1) - parseInt(num2);
}

const dividir = (num1, num2)=> {
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1, num2)=> {
    return parseInt(num1) * parseInt(num2);
}

alert("¿Qué operación deseas realizar?");
let operación = prompt("1: Suma, 2: Resta, 3: División, 4: Multiplicación");

if (operación == 1) {
    let num1 = prompt("Primer número para sumar");
    let num2 = prompt("Segundo número para sumar");
    let resultado = sumar(num1, num2);
    alert(`Tu resultado es: ${resultado}`);
}

else if (operación == 2) {
    let num1 = prompt("Primer número para restar");
    let num2 = prompt("Segundo número para restar");
    let resultado = restar(num1, num2);
    alert(`Tu resultado es: ${resultado}`);
}

else if (operación == 3) {
    let num1 = prompt("Primer número para dividir");
    let num2 = prompt("Segundo número para dividir");
    let resultado = dividir(num1, num2);
    alert(`Tu resultado es: ${resultado}`);
}

else if (operación == 4) {
    let num1 = prompt("Primer número para multiplicar");
    let num2 = prompt("Segundo número para multiplicar");
    let resultado = multiplicar(num1, num2);
    alert(`Tu resultado es: ${resultado}`);
}

else {
    alert("No se ha encontrado la operación.");
}