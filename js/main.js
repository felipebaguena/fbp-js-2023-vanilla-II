// EJERCICIO 1 (Vanilla II)

// let figura = prompt("¿de qué figura quieres calcular el área? (circulo, triangulo, cuadrado)");

// switch (figura) {
//     case "circulo":
//         const PI = 3.1416
//         let radio = parseFloat(prompt("Introduce el radio del círculo"));
//         console.log ((radio**2)*PI);
//         break;

//     case "triangulo":
//         let base = parseFloat(prompt("Introduce el valor de la base del triángulo"));
//         let altura = parseFloat(prompt("Introduce el valor de la altura del triángulo"));
//         console.log((base*altura)/2);
//         break;

//     case "cuadrado":
//         let lado = parseFloat(prompt("Introduce el valor de los lados del cuadrado"));
//         console.log(lado*lado);
//         break;

//     default:
//         console.log("El valor introducido es erróneo");
//         break;
// };

// EJERCICIO 2

// let numeros = parseInt(prompt("¿Cuántos números aleatorios quieres?"));
// let min = parseInt(prompt("Introduce el menor número del rango"));
// let max = parseInt(prompt("Introduce el mayor número del rango"));

// for (let i = 0; i < numeros; i++) {

//     console.log(Math.floor(Math.random() * (max - min) + min));
// };

// EJERCICIO MARA

// Crea un programa que genere un número aleatorio del 1 al 100. 
// Pide al usuario que adivine el número. 
// El programa debe decir al usuario si el número que ha dicho es mayor o menor
// que el número aleatorio y seguir pidiéndole números hasta que lo adivine.

// const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
// let numeroUsuario = parseInt(prompt("Intenta adivinar el número aleatorio del 1 al 100"));

// while (numeroUsuario !== numeroAleatorio) {
//     if (numeroUsuario < numeroAleatorio) {
//     console.log("El número es mayor");
//     } else if (numeroUsuario > numeroAleatorio) {
//     console.log("El número es menor");
//     }
//     numeroUsuario = parseInt(prompt("Vuelve a intentarlo"));
// }

// console.log("Enhorabuena, el número oculto es ", numeroAleatorio);