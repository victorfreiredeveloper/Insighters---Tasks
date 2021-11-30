const database = {
    tables: {},
    createTable (commandDDL){
        const regexp           = /create table ([a-z]+) \((.+)\)/;
        const parsedStatement  = commandDDL.match(regexp);
        const tableName        = parsedStatement[1];
        let   columnsArrray    = parsedStatement[2];
        columnsArrray          = columnsArrray.split(", ");
        let columns            = {};
        for (let column of columnsArrray) {
            column        = column.split(' ');
            const name    = column[0];
            const type    = column[1];
            columns[name] = type;
        }
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