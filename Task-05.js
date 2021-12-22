// Victor Freire 21/12/2021
// Taks 04 - Objetivo: Implemente o método insert. Para isso, é necessário, como sempre, extrair as informações a partir do comando, converter as informações em um objeto e inserir no array data da tabela correspondente. 
// Instruções
// Dados os comandos (*strings*):
// ```
// insert into author (id, name, age) values (1, Douglas Crockford, 62)
// insert into author (id, name, age) values (2, Linus Torvalds, 47)
// insert into author (id, name, age) values (3, Martin Fowler, 54)
// ```
// 1. No objeto **database**, crie um método chamado **insert**, que recebe o comando por parâmetro.
// 2. Na função **execute**, invoque o método **insert**.
// 3. Extraia o nome da tabela para a variável **tableName**, as colunas para a variável **columns** e os valores para a variável **values**.
// 4. Manipule os valores dentro **columns** e **values**, separando-os um a um.
// 5. Crie um objeto chamado **row** com base nas colunas e valores.
// 6. Insira o objeto em **data**.

const DatabaseError = function(statement, message){
    this.statement = statement;
    this.message = `${message} ${statement}`;
}

const database = {
    tables: {},
    createTable (command){
        let tableName  = command.split(' ',3)[2].trim();//
        let columnsArray  = command.match(/\(.+/)[0].replace('(','').replace(')','').split(','); 
        let columns       = {};
        for (i = 0; i < columnsArray.length; i++) {
            columns[columnsArray[i].trim().split(' ',2)[0]] = columnsArray[i].trim().split(' ',2)[1];
        }
        this.tables[tableName] = {columns, data : []};
    },
    insert (command){
        const regexp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
        const parsedStatement = command.match(regexp);
        let tableName  = parsedStatement[1];
        let columns    = parsedStatement[2].split(',');
        let values     = parsedStatement[3].split(',');
        let row = {};
        for (let index = 0; index < columns.length; index++) {
            row[columns[index].trim()] = values[index]; 
        }
        this.tables[tableName].data.push(row);
         
    },
    execute (command){
            if (command.startsWith('create')) {
                this.createTable(command);
            }
            else if (command.startsWith('insert')) {
                this.insert(command);
            }
            else {
                throw new DatabaseError(command, 'Syntax error:');
            }
        },
}

try {
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    console.log(JSON.stringify(database, null, '    '));
} catch (e) {
    console.log(e.message);
}