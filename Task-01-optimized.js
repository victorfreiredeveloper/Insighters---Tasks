// Victor Freire 14/11/2021
// Taks 01 - Objetivo: Extraia partes do comando como o 
// nome da tabela e as colunas, armazenando-as em variáveis.
const vs_comando  = 'create table author (id number, name string, age number, city string, state string, country string)';
let   tableName =  vs_comando.split(' ',3)[2];
let   columns = vs_comando.match(/\(.+/)[0].replace('(','').replace(')','').split(','); 
console.log(tableName.trim());
console.log(columns);