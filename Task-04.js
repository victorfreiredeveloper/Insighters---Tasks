// Victor Freire 16/11/2021
// Taks 03 - Objetivo: Lance uma exceção caso o comando não exista, interrompendo o fluxo de execução. 
// Instruções
// 1. Crie uma função construtora chamada **DatabaseError** que recebe dois parâmetros: **statement** e **message**.
// 2. Dentro do método **execute**, caso o comando passado por parâmetro não exista, instancie a função construtora **DatabaseError**, lançando-a como um erro.
// 3. Envolva a chamada para o objeto **database** em um bloco *try/catch* imprimindo a propriedade **message** do objeto **DatabaseError**.

const DatabaseError = function(statement, message){
    this.statement = statement;
    this.message = `${message} ${statement}`;
}

const database = {
    tables: {},
    createTable (commandDDL){
        let tableName  = commandDDL.split(' ',3)[2].trim();//
        let columnsArray  = commandDDL.match(/\(.+/)[0].replace('(','').replace(')','').split(','); 
        let columns       = {};
        for (i = 0; i < columnsArray.length; i++) {
            columns[columnsArray[i].trim().split(' ',2)[0]] = columnsArray[i].trim().split(' ',2)[1];
        }
        // chave dinamica -- dynamic key
        // computação em tempo real de objetos
        this.tables[tableName] = {columns, data : []};

        console.log(JSON.stringify(database, null, '    '));
    },
    execute (commandDDL){
            if (commandDDL.startsWith('create')) {
                this.createTable(commandDDL);
            }
            else {
                throw new DatabaseError(commandDDL, 'Syntax error:');
            }
        },
}

try {
    database.execute('create table author (id number, name string, age number, city string, state string, country string)');
    database.execute("select id, name from author");
} catch (e) {
    console.log(e.message);
}