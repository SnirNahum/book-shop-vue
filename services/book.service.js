import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";
const PAGE_SIZE = 5;
const BOOK_KEY = "bookDB";
var gFilterBy = { txt: "", price: 0 };
var gSortBy = { title: 1 };
var gPageIdx;
_createBooks();
export const bookService = {
  query,
  get,
  remove,
  save,
  getEmptyBook,
  getNextBookId,
  getFilterBy,
  setFilterBy,
  getBookCountBypriceMap,
};
window.bookService = bookService;
function query() {
  return storageService.query(BOOK_KEY).then((books) => {
    if (gFilterBy.txt) {
      const regex = new RegExp(gFilterBy.txt, "i");
      books = books.filter((book) => regex.test(book.title));
    }
    if (gFilterBy.price) {
      books = books.filter((book) => book.price >= gFilterBy.price);
    }
    if (gPageIdx !== undefined) {
      const startIdx = gPageIdx * PAGE_SIZE;
      books = books.slice(startIdx, startIdx + PAGE_SIZE);
    }
    if (gSortBy.price !== undefined) {
      books.sort((b1, b2) => (b1.price - b2.price) * gSortBy.price);
    } 
    // else if (gSortBy.title !== undefined) {
    //   books.sort(
    //     (b1, b2) => b1.title.localeCompare(b2.title) * gSortBy.title
    //   );
    // }
    return books;
  });
}
function get(bookId) {
  return storageService.get(BOOK_KEY, bookId);
}
function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId);
}
function save(book) {
  if (book.id) {
    return storageService.put(BOOK_KEY, book);
  } else {
    return storageService.post(BOOK_KEY, book);
  }
}
function getEmptyBook(title = "", price = 0) {
  return { id: "", title, price };
}
function getFilterBy() {
  return { ...gFilterBy };
}
function setFilterBy(filterBy = {}) {
  if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt;
  if (filterBy.price !== undefined) gFilterBy.price = filterBy.price;
  return gFilterBy;
}
function getNextBookId(bookId) {
  return storageService.query(BOOK_KEY).then((books) => {
    var idx = books.findIndex((book) => book.id === bookId);
    if (idx === books.length - 1) idx = -1;
    return books[idx + 1].id;
  });
}
function getBookCountBypriceMap() {
  return storageService.query(BOOK_KEY).then((books) => {
    const bookCountBypriceMap = books.reduce(
      (map, book) => {
        if (book.price < 120) map.slow++;
        else if (book.price < 200) map.normal++;
        else map.fast++;
        return map;
      },
      { slow: 0, normal: 0, fast: 0 }
    );
    return bookCountBypriceMap;
  });
}
function _createBooks() {
  let books = utilService.loadFromStorage(BOOK_KEY);
  if (!books || !books.length) {
    books = [];
    books.push(_createBook("audu", 300));
    books.push(_createBook("fiak", 120));
    books.push(_createBook("subali", 100));
    books.push(_createBook("mitsu", 150));
    utilService.saveToStorage(BOOK_KEY, books);
  }
}
function _createBook(title, price = 250) {
  const book = getEmptyBook(title, price);
  book.id = utilService.makeId();
  return book;
}
