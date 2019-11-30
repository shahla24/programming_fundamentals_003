// eslint-disable-next-line no-unused-vars
const Book = require("./Book");

const catalogue = [
  new Book ("The Catcher in the Rye", "J.D. Salinger", 10),
  new Book ( "Dracula", "Bram Stoker", 0),
  new Book ("Between the Assassinations", "Aravind Adiga", 9),
  new Book ( "Wolf Hall", "Hilary Mantel", 33),
  new Book ( "Bring Up The Bodies", "Hilary Mantel", 31),
  new Book ( "A Place of Greater Safety", "Hilary Mantel", 11),
  new Book ( "Giving Up the Ghost", "Hilary Mantel", 8),
  new Book ( "The Assassination of Margaret Thatcher", "Hilary Mantel", 43),
  new Book ( "The Yellow Wallpaper", "Charlotte Perkins Gilman", 12),
  new Book ( "Conversations With Friends", "Sally Rooney", 1),
  new Book ("Normal People","Sally Rooney", 2),
  new Book ("Everything I Never Told You", "Celeste Ng", 6),
  new Book ("2666", "Robert Bolaño", 17),
  new Book ("By Night In Chile", "Robert Bolaño", 8),
  new Book ("A Tale of Two Cities", "Charles Dickens", 3),
  new Book ("Oliver Twist", "Charles Dickens", 7),
  new Book ("Great Expectations", "Charles Dickens", 1),
  new Book ("The Blind Assassin", "Margaret Atwood", 8),
  new Book ("Why Be Happy When You Could Be Normal?", "Jeanette Winterson", 19),
  new Book ("The Origin of Species", "Charles Darwin", 50),
];


function checkBook(title) {
  let result = false;
  if (!title) throw new Error("Please provide a title");
  for (let i = 0; i < catalogue.length; i++){
    let books = catalogue[i].title;
      if (books.includes(title)){
      result = true;
    }
  }
 return result;
 }

 function countBooksByKeyword(keyword) {
  if (!keyword) throw new Error("Please provide a keyword");
  let count = 0;
  for (let i = 0; i < catalogue.length; i++){
 let books = catalogue[i].title;
    if (books.includes(keyword)){
      count++;
    }
  }
  return count;
 }

 function getBooksByAuthor(author) {
  if (!author) throw new Error("Please provide an author");
  let count = [];
  for (let i = 0; i < catalogue.length; i++){
    let books = catalogue[i].author;
    if (books.includes(author)){
      count.push(catalogue[i].title)
    }
  }
  return count;
 }

 function getStockCount(title) {
  if (!title) throw new Error("Please provide a title");
  let count = 0;
  for (let i = 0; i < catalogue.length; i++){
    let books = catalogue[i].title;
    if(books.includes(!title)){
      count = 0;
    }else if(books.includes(title)){
    count = catalogue[i].quantity
  }
 }
 return count;
 }


 function stockReview(title) {
  if (!title) throw new Error("Please provide a title");
  for (let i = 0; i < catalogue.length; i++){
    if(getStockCount(title) === 0){
      return "Not in Stock";
    }else if (getStockCount(title) > 0 && getStockCount(title) <= 5){
      return "Low Stock";
    }else if (getStockCount(title) >= 5 && getStockCount(title) <= 10){
      return "Medium Stock";
    }else if (getStockCount(title) > 10){
      return "High Stock";
    }
  }
 }

module.exports = {
  checkBook,
  countBooksByKeyword,
  getBooksByAuthor,
  getStockCount,
  stockReview
};
