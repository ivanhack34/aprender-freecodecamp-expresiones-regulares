///todo: Ejercicio del dia 12: 12/28/2022

//?1-Usa el método "test"

/*
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Cambia esta línea //Respuesta

console.log(result);
*/

//todo: Ejercicio del dia 13: 4/1/2023

//?2-Haz coincidir cadenas literales

/*
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Cambia esta línea //Respuesta
let result = waldoRegex.test(waldoIsHiding);

console.log(result);
*/

//?3-Coincide una cadena literal con diferentes posibilidades

/*
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Cambia esta línea //Respuesta
let result = petRegex.test(petString);

console.log(result);
*/

//?4-Ignora la capitalización al coincidir

/*
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Cambia esta línea //Respuesta
let result = fccRegex.test(myString);

console.log(result);
*/

//?5-Extrae coincidencias

/*
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Cambia esta línea //Respuesta
let result = extractStr.match(codingRegex); // Cambia esta línea //Respuesta

console.log(result);
*/

//?6-Encuentra más que la primera coincidencia

/*
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Cambia esta línea //Respuesta
let result = twinkleStar.match(starRegex); // Cambia esta línea //Respuesta

console.log(result)
*/

//?7-Haz coincidir cualquier cosa con el comodín punto

/*
let exampleStr = "Let's have dun with regular expressions!";
let unRegex = /.un/; // Cambia esta línea //Respuesta
let result = unRegex.test(exampleStr);

console.log(result);
*/

//?8-Haz coincidir un solo carácter con múltiples posibilidades

/*
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Cambia esta línea //Respuesta
let result = quoteSample.match(vowelRegex); // Cambia esta línea //Respuesta

console.log(result);
*/

//?9-Haz coincidir las letras del alfabeto

/*
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Cambia esta línea //Respuesta
let result = quoteSample.match(alphabetRegex); // Cambia esta línea //Respuesta

console.log(result);
*/

//?10-Haz coincidir los números y las letras del alfabeto

/*
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Cambia esta línea //Respuesta
let result = quoteSample.match(myRegex); // Cambia esta línea //Respuesta

console.log(result)
*/

//?11-Haz coincidir caracteres individuales no especificados


