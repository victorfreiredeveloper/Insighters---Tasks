// Victor Freire 14/11/2021
// Taks 01 - Objetivo: Extraia partes do comando como o 
// nome da tabela e as colunas, armazenando-as em variáveis.
const vs_comando  = 'create table author (id number, name string, age number, city string, state string, country string)';
const regExp = /\(.+/;
let   va_stringArray =  vs_comando.split(' ',3);
let   tableName = va_stringArray[2];
let   columns = vs_comando.match(regExp)[0].replace('(','').replace(')','').split(','); 

console.log('tableName = ' + tableName.trim());
console.log('columns = ');
console.log(columns);