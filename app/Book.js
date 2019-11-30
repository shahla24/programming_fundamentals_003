
class Book {
  constructor(title, author, quantity) {
    this.title = title;
    this.author = author;
    this.quantity = quantity;
  }
  addStock(num) {
    return num < 0 ? this.quantity : this.quantity += num;
  }
  removeStock(num) {
    if (num < 0) {
      return this.quantity 
    } 
    let removedBooks = this.quantity -= num
     if (removedBooks < 0) {
       return this.quantity = 0
     } else {
      return removedBooks
    }
  }
 
}
module.exports = Book;