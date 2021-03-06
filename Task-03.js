// Victor Freire 16/11/2021
// Taks 03 - Objetivo: Crie dois métodos no objeto database chamados de createTable e execute. 
// O comando createTable já foi implementado no exercício anterior, mova o código eutilize o método execute para invocar 
// dinamicamente o método createTable
// Instruções
// Crie dois métodos no objeto database chamados de createTable e execute. 
// O comando createTable já foi implementado no exercício anterior, mova o código e 
// utilize o método execute para invocar dinamicamente o método createTable

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
                console.log('invalid command');
            }
        },
}

database.execute('create table author (id number, name string, age number, city string, state string, country string)');