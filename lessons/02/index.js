// const decimal = 1;
// const decimalFloat = 1.0;
// const hex = 0xffffff;
// const bin = 0b011;
// const octal = 0o1;

// const decimal2 = new Number(10);
// const decimalFloat2 = new Number(0.0);
// const hex2 = new Number(0xFF);
// const bin2 = new Number(0b10);
// const octal2 = new Number(0o10);

// // toExponential
// // toFixed
// // toPrecision
// const fixed = (123.4).toFixed(10);

// // operadores aritmeticos

// // +, -, *, /, %

// const sum = 2 + 2;
// const sub = 2 - 2;
// const div = 2 / 2;
// const mul = 2 * 2;
// const mold = 2 % 2;

// // operadores de atribuição

// // +=, -=, *=, /=, %=
// // let result = 10;

// // result = result + 5; // 15

// // result += 5;

// // console.log(result);

// // operadores de incremento e decremento

// // ++, --
// // let result = 10;

// // result = result - 1;
// // // result--;

// // console.log(result);

// // conversao de numbers
// console.log(parseInt("10")); // numero decimal (10) converte outras bases
// console.log(parseFloat("10.2")) // só numero com base 10

// console.log((010).toString(2)); //

// // Math API

// // constants
// const pi = Math.E;

// // metodos de manipulação
// Math.round()
// Math.floor()
// Math.ceil()

// // metodos operações
// Math.sqrt()
// Math.pow()
// Math.log()

// // Strings

// const string1 = '';
// const string2 = "";
// const string3 = ``;

// const stringContruct = new String('javascript');

// let counter = 0;

// console.time("performance");

// while (counter < 10000000) {
//   "javascript";
//   counter++;
//   // counter = counter + 1;
// }

// console.timeEnd("performance");

// let counter = 0;

// console.time("performance");

// while (counter < 10000000) {
//   new String("javascript");
//   counter++;
//   // counter = counter + 1;
// }

// console.timeEnd("performance");

// console.log(
//   'Each constructor is a function that has a property named "prototype" that is used to implement prototype-based inheritance and shared properties.'
// );

// console.log("An object's prototype chain should have finite length.");

// console.log(
//   `The proper way to cause a line terminator code point to be part of the String value of a string literal is to use an escape sequence sush as \\n or \\u000A`
// );

// template literal

    let host = "localhost";
    let port = "3000";
    let resource = "users";

// https://localhost:300/users
// forma normal
// let url = "https://" + host + ":" + port + "/" + resource;

// forma com template literal
let url = `https://${host}:${port}/${resource}`;

// console.log(url);

// let monthsOfYear =
//   "0 - Jan" +
//   "1 - Feb" +
//   "2 - Mar" +
//   "3 - Apr" +
//   "4 - May" +
//   "5 - Jun" +
//   "6 - Jul" +
//   "7 - Aug" +
//   "8 - Sep" +
//   "9 - Oct" +
//   "10 - Nov" +
//   "11 - Dec";

// let monthsOfYear =
//   "0 - Jan\n\
// 1 - Feb\n\
// 2 - Mar\n\
// 3 - Apr\n\
// 4 - May\n\
// 5 - Jun\n\
// 6 - Jul\n\
// 7 - Aug\n\
// 8 - Sep\n\
// 9 - Oct\n\
// 10 - Nov\n\
// 11 - Dec";

// let monthsOfYear = `0 - Jan 
// 1 - Feb
// 2 - Mar
// 3 - Apr
// 4 - May
// 5 - Jun
// 6 - Jul
// 7 - Aug
// 8 - Sep
// 9 - Oct
// 10 - Nov
// 11 - Dec`;

// console.log(monthsOfYear);

// string api

// metodos para operações

// const string = "matheus";

// console.log(string.replace('a', 'm').substring(0, 3).toLocaleUpperCase())

// DESAFIO

// Pesquisar sobre os Métodos do Math API
// R: Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.

// floor
// R: Retorna o maior inteiro que é menor ou igual a um número.
// ceil
// round
// abs
// pow
// sqrt
// random
// sign

// Pesquisar sobre os Métodos da String API
// toUpperCase
// toLowerCase
// includes
// startsWith
// endsWith
// match
// search
// replace
// slice
// split
// substring