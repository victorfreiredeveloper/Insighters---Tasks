// DESAFIO

// Pesquisar sobre os Métodos do Math API
// R: Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.

// floor
// R: Retorna o maior inteiro que é menor ou igual a um número. (arredonda pra baixo)
let vn_floor = Math.floor(10.99);
console.log(vn_floor);

// ceil
// R: Retorna o menor inteiro que é maior ou igual a um número (arredonda pra cima)
let vn_ceil = Math.ceil(10.99);
console.log(vn_ceil);

// round
// R: Retorna o valor arrendodado de x, para o valor inteiro mais próximo. (arredonda conforme regra de meio pra cima ou meio pra baixo)
let vn_round = Math.round(10.49);
console.log(vn_round);

// abs
// R: Retorna o módulo, ou valor absoluto, de um número (|x|).
let vn_abs = Math.abs(-10.49);
console.log(vn_abs);

// pow
// R: Retorna a base x elevada à potência y do expoente, ou seja, x^y.
let vn_pow = Math.pow(2,4); // (2*2*2*2)
console.log(vn_pow);

// sqrt
// R: Retorna a raiz quadrada positiva de um número (\sqrt x).
let vn_sqrt = Math.sqrt(49); // (2*2*2*2)
console.log(vn_sqrt);

// random
// R: Retorna um número pseudo-aleatório entre 0 e 1.
let vn_random = Math.random(); // (2*2*2*2)
console.log(vn_random);

// sign
// R: Retorna o sinal de x, indicando se é positivo, negativo ou zero.
let vn_sign = Math.sign(-50); // (2*2*2*2)
console.log(vn_sign);

// Pesquisar sobre os Métodos da String API

// toUpperCase
// R: O método toUpperCase() retorna o valor da string original convertido em letras maiúsculas.
console.log('Victor'.toUpperCase()); // 'VICTOR'

// toLowerCase
// R: O método toUpperCase() retorna o valor da string original convertido em letras minucsculas.
console.log('VICTOR'.toLowerCase()); // 'victor'

// includes
// O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false.
//Parâmetros
//searchString É o conjunto de caracteres que será pesquisado dentro desta string.
//position Opcional. É um número inteiro que indica por onde a busca iniciará, referente ao índice da string a ser pesquisada. O valor padrão é 0.

let str = 'Ser, ou não ser, eis a questão.';

console.log(str.includes('Ser'));         // true
console.log(str.includes('questão'));     // true
console.log(str.includes('não existe'));  // false
console.log(str.includes('ser', 1));      // true
console.log(str.includes('SER'));         // false

// startsWith
//R: O método startsWith() determina se uma string começa com os caracteres especificados, retornando true ou false.
let str2 = 'Ser ou não ser, eis a questão.';

console.log(str2.startsWith('Ser'))          // true
console.log(str2.startsWith('não ser'))      // false
console.log(str2.startsWith('não ser', 7))  // true

// endsWith
// R: O método endsWith() indica se uma string termina com determinados caracteres, retornando true ou false.
var str3 = 'Ser ou não ser, eis a questão';

console.log(str3.endsWith('questão')); // retorna true
console.log(str3.endsWith('ser'));     // retorna false
console.log(str3.endsWith('ser', 14)); // retorna true

// match
// R: O método match() retorna uma correspondência entre uma string com uma expressão regular.
var str4 = "Para maiores informações, veja o Capítulo 3.4.5.1";
var re = /(capítulo \d+(\.\d)*)/i;
var found = str4.match(re);

console.log(found);

// search
//R: O método search() realiza uma busca por uma ocorrência entre uma expressão regular e uma String.
let str5 = "hey JudE"
let re2 = /[A-Z]/g
let reDot = /[.]/g
console.log(str5.search(re2))    // retorna 4, que é o índice da primeira letra maiúscula "J"
console.log(str5.search(reDot)) // retorna -1 pois não conseguiu encontrar o ponto "."

// replace
// R: O método replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres). O padrão pode ser uma string ou uma RegExp, e a substituição pode ser uma string ou uma função a ser chamada para cada correspondência. Se o padrão for uma string, apenas a primeira ocorrência será substituída.
var str6 = 'Twas the night before Xmas...';
var newstr = str6.replace(/xmas/i, 'Christmas');

console.log(newstr);

// slice
// R: O método slice() extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original.

const nome = 'Victor Hugo';
console.log(nome.slice(5)); 

// split
// O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);

var re = /\s*;\s*/;
var nameList = names.split(re);

console.log(nameList);
// substring
// R: O método substring() retorna a parte da string entre os índices inicial e final, ou até o final da string.
// Há uma diferença sutil entre os métodos substring() e substr(), então você deve ter cuidado para não confundi-los.
// Os argumentos de substring() representam os índices inicial e final, enquanto os argumentos de substr() representam o índice inicial e o número de caracteres a serem incluídos na string retornada.
let text = 'Mozilla'
console.log(text.substring(2,5))  // retorna "zil"
console.log(text.substr(2,3))     // retorna "zil"