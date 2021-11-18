const database = {
    tables: {},
    createTable (commandDML){
        let tableName  = commandDML.split(' ',3)[2].trim();//
        let columnsArray  = commandDML.match(/\(.+/)[0].replace('(','').replace(')','').split(','); 
        let columns       = {};
        for (i = 0; i < columnsArray.length; i++) {
            columns[columnsArray[i].trim().split(' ',2)[0]] = columnsArray[i].trim().split(' ',2)[1];
        }
        
        // chave dinamica
        // computação em tempo real de objetos
        // dynamic key
        this.tables[tableName] = {columns, data : []};

        console.log(JSON.stringify(database, null, '    '));
    },
    execute (commandDML){
            if (commandDML.startsWith('create')) {
                this.createTable(commandDML);
            }
            else {
                console.log('invalid command');
            }
        },
}

database.execute('create table author (id number, name string, age number, city string, state string, country string)');