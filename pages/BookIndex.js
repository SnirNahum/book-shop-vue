import { bookService } from "../services/book.service.js";
import BookList from "../cmps/BookList.js";
import BookPreview from "../cmps/BookPreview.js";
import BookEdit from "../cmps/BookEdit.js";
import BookDetails from "../cmps/BookDetails.js";
import BookFilter from "../cmps/BookFilter.js";

export default {
  template: `
    <section class="book-index">
    <h1>Search book <BookFilter @filter="setFilterBy"/></h1>
      <BookList 
      v-if="books"
      :books="filteredBooks" 
      @remove="removeBook"
      @select="selectBook"/>
      <BookDetails 
      v-if="selectedBook" 
      :book="selectedBook"
      @close="selectedBook = null" />
      <BookEdit @save="saveBook"/>
      
      

    </section>
  `,
  data() {
    return {
      books: null,
      selectedBook: null,
    };
  },
  created() {
    bookService.query().then((books) => (this.books = books));
  },
  methods: {
    selectBook(bookId) {
      this.selectedBook = this.books.find((book) => bookId === book.id);
    },
    saveBook(bookToSave) {
      bookService
        .save(bookToSave)
        .then((savedBook) => this.books.push(savedBook));
    },
    removeBook(bookId) {
      bookService.remove(bookId).then(() => {
        const idx = this.books.findIndex((book) => book.id === bookId);
        this.books.splice(idx, 1);
      });
    },
    setFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    filteredBooks() {
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.books.filter((book) => regex.test(book.title));
    },
  },
  components: {
    BookList,
    BookPreview,
    BookEdit,
    BookDetails,
    BookFilter,
  },
};
