// const book = {
//   // chave: valor
//   title: "Clean Code",
//   author: "Robert C. Martin",
//   pages: 464,
//   language: "English",
//   available: true,
// };

// shorthand
// const title = "Clean Code";
// const author = "Robert C. Martin";
// const pages = 464;
// const language = "English";
// const available = true;

// const book = {
//   // propriedade -> chave: valor
//   title,
//   author,
//   pages,
//   language,
//   available,
// };

// console.log(book);

// const book = {
//   title: "Clean Code",
//   author: "Robert C. Martin",
//   'number-of-pages': 464,
//   language: "English",
//   available: true,
// };

// console.log(book);

// criar chaves de um objeto de forma dinamica
// (ou seja, não sabemos o nome da propriedade)
// const key1 = 'title';
// const key2 = 'author';
// const key3 = 'pages';
// const key4 = 'language';
// const key5 = 'available';

// const book = {
//   [key1]: 'Clean Code',
//   [key2]: 'Robert C. Martin',
//   [key3]: 464,
//   [key4]: 'English',
//   [key5]: true
// };

// console.log(book);

// notação literal
// const book = {
//   // chave: valor
//   title: "Clean Code",
//   author: "Robert C. Martin",
//   pages: 464,
//   language: "English",
//   available: true,
// };

// referencia
// const book = {};

// book.title = 'Clean Code';
// book.author = 'Robert C. Martin';
// book.pages = 464;
// book.language = 'English';
// book.available = true;

// console.log(book);

// const key1 = 'title';
// const key2 = 'author';
// const key3 = 'pages';
// const key4 = 'language';
// const key5 = 'available';

// const book = {};

// book[key1] = 'Clean Code';
// book[key2] = 'Robert C. Martin';
// book[key3] = 464;
// book[key4] = 'English';
// book[key5] = true;

// console.log(book);

// const book1 = {
//   // propriedade -> chave: valor
//   author: "Robert C. Martin",
//   title: "Clean Code",
//   pages: 464,
//   language: "English",
//   available: true,
// };

// const book2 = {};

// let index = 0;
// for (const key in book1) {
//   if (index === 0) {
//     book2[key] = "Game of Thrones";
//   } else {
//     book2[key] = book1[key];
//   }
//   index += 1;
// }

// console.log("book1", book1);
// console.log("book2", book2);

// const book1 = {
//   // propriedade -> chave: valor
//   author: "Robert C. Martin",
//   title: "Clean Code",
//   pages: 464,
//   language: "English",
//   available: true,
//   // publisher: null
// };

// console.log(book1.publisher);

// operador IN

// const book = {
// 	title: "Clean Code",
// 	author: "Robert C. Martin",
// 	pages: 464,
// 	language: "English",
// 	available: true
// };

// console.log("title" in book);
// console.log("publisher" in book);

// não fazer isso para deletar chaves (propriedades)
// book.available = undefined;

// não usa esse operador
// delete book.available;

// console.log(book);

// const book1 = {
//   title: "Clean Code",
//   author: "Robert C. Martin",
// };

// const book2 = {
//   title: "Game of Thrones",
//   author: "Robert C. Martin",
// };

// let equal = true;
// // for (const key in book1) {
// //   if (book1[key] !== book2[key]) equal = false;
// // }

// for (const key in book2) {
//   if (book2[key] !== book1[key]) equal = false;
// }

// console.log(equal);