// functions

// function = codigo de bloco executavel

// function declartion
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2));

// function expression
// const sum = function (a, b) {
//   return a + b;
// }

// console.log(sum(1, 2));

// diferenças entre declaration x expression

// console.log(sum(1, 2));

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2));

// const sum = function (a, b) {
//   return a + b;
// };

// functions são primeira classe:
// atribuidas a variaveis,
// passados parametro
// ou serem retornadas de uma outra função

// const sum = function (a, b) {
//   return a + b;
// };

// const subtract = function (a, b) {
//   return a - b;
// };

// const calculator = function (fn) {
//   return function (a, b) {
//     return fn(a, b);
//   };
// };

// console.log(calculator(subtract)(2, 2));

// const sum = function (a, b) {
//   return a + b;
// }

// console.log(sum(2, 2));
// console.log(sum(2));
// console.log(sum());
// console.log(sum(2, 2, 1));

// rest operator
// rest parameter
const sum = function (...numbers) {
  let total = 0;

  for (const number of a) {
    total += number;
  }

  return total;
};

console.log(sum(1, 2, 3, 4, 5, 6, 8, 1, 2, 345, 1, [123], [1, 2, 3]));


// métodos -> funções