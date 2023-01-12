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

//todo: Ejercicio del dia 14: 5/1/2023

//?11-Haz coincidir caracteres individuales no especificados

/*
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Cambia esta línea //Respuesta
let result = quoteSample.match(myRegex); // Cambia esta línea //Respuesta

console.log(result);
*/

//?12-Haz coincidir caracteres que aparecen una o más veces

/*
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Cambia esta línea //respuesta
let result = difficultSpelling.match(myRegex);

console.log(result);
*/

//?13-Haz coincidir caracteres que aparecen cero o más veces


//let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
//let chewieRegex = /Aa*/; // Change this line //Respuesta
/*let result = chewieQuote.match(chewieRegex);

console.log(result);
*/

//?14-Encuentra caracteres con una coincidencia perezosa

/*
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Cambia esta línea //respuesta
let result = text.match(myRegex);

console.log(result);	
*/

//?15-Encuentra uno o más criminales en una cacería

/*
let reCriminals = /C+/; // Cambia esta línea //respuesta

console.log(reCriminals);
*/

//?16-Haz coincidir patrones de cadena de inicio

/*
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Cambia esta línea //Respuesta
let result = calRegex.test(rickyAndCal);

console.log(result);
*/

//?17-Haz coincidir patrones de cadena final

/*
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Cambia esta línea
let result = lastRegex.test(caboose);

console.log(result);
*/

//?18-Coincide todas las letras y números

/*
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Cambia esta línea
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);
*/

//?19-Haz coincidir todo menos letras y números

/*
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Cambia esta línea
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result);
*/

//?20-Coincide con todos los números

/*
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Cambia esta línea
let result = movieName.match(numRegex).length;

console.log(result);
*/

//todo: Ejercicio del dia 15/1/2023

//?21-Coincide con todos los caracteres no numéricos

/*
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Cambia esta línea //Respuesta
let result = movieName.match(noNumRegex).length;

console.log(result);
*/

//?22-Restringe posibles nombres de usuario
/*
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; //Respuesta
let result = userCheck.test(username);
console.log(result)
*/


//Explicacion de la respuesta

/*
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
*/

//?23-Match Whitespace

/*
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line //answer
let result = sample.match(countWhiteSpace);

console.log(result);
*/

//?24-Match Non-Whitespace Characters

/*
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line //answer
let result = sample.match(countNonWhiteSpace);

console.log(result.length);
*/

//?25-Specify Upper and Lower Number of Matches

/*
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line //answer
let result = ohRegex.test(ohStr);

console.log(result);
*/

//?26-Specify Only the Lower Number of Matches

/*
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line //answer
let result = haRegex.test(haStr);

console.log(result);
*/

//?27-Specify Exact Number of Matches

/*
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line //answer
let result = timRegex.test(timStr);

console.log(result);
*/

//?28-Check for All or None

/*
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line //answer
let result = favRegex.test(favWord);

console.log(result);
*/

//?29-Positive and Negative Lookahead

/*
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line //answer
let result = pwRegex.test(sampleWord);
console.log(result);
*/
//?30-Check For Mixed Grouping of Characters

/*
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Change this line // answer 
let result = myRegex.test(myString); // Change this line // answer
// After passing the challenge experiment with myString and see how the grouping works
console.log(result);
*/


//?31-Reuse Patterns Using Capture Groups

