// Victor Freire 16/11/2021
// Taks 02 - Objetivo: Com base no nome da tabela e nas colunas, monte uma estrutura 
// de objetos para armazenar tanto a definição da tabela quanto os dados..
// Instruções
// Dado o comando (uma string):
// 1. Crie um objeto chamado database.
// 2. Dentro do objeto database, crie um objeto chamado tables.
// 3. Dentro do objeto tables, crie um objeto com o nome da tabela.
// 4. Dentro do objeto criado com o nome da tabela, crie um objeto chamado columns.
// 5. Dentro do objeto criado com nome da tabela, crie um array chamado data.
// 6. Exiba o conteúdo do objeto database utilizando JSON.stringify

const vs_comando    = 'create table author (id number, name string, age number, city string, state string, country string)';
let   tableName     = vs_comando.split(' ',3)[2].trim();
let   columnsArray  = vs_comando.match(/\(.+/)[0].replace('(','').replace(')','').split(','); 
const columns       = {};
for (i = 0; i < columnsArray.length; i++) {
    columns[columnsArray[i].trim().split(' ',2)[0]] = columnsArray[i].trim().split(' ',2)[1];
}
const database = {
    tables: {
        [tableName] : {
            columns ,
            data    : [
            ]
        }
    }
};
console.log(JSON.stringify(database, null, '    '));