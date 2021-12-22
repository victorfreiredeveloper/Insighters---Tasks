// const statement =
//   "create table author (id number, name string, age number, city string, state string, country string)";

const statement = "insert into author (id, name, age) values (1, Douglas Crockford, 62)";

//const regexp = /insert into ([a-z]+) \((.+)\)/;
const regexp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;

const parsedStatement = statement.match(regexp);

console.log(parsedStatement);
//const tableName = parsedStatement[1];
//let columns = parsedStatement[2];

//columns = columns.split(", ");

//console.log(tableName);
//console.log(columns);
