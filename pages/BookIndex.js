import { bookService } from "../services/book.service.js";
import BookList from "../cmps/BookList.js";
import BookPreview from "../cmps/BookPreview.js";
import BookEdit from "./BookEdit.js";
import BookDetails from "./BookDetails.js";
import BookFilter from "../cmps/BookFilter.js";

export default {
  template: `
    <section class="book-index">
    <RouterLink to="/books/edit">Add book</RouterLink>

      <BookFilter @filter="setFilterBy"/>
      <BookList 
      v-if="books"
      :books="filteredBooks" 
      @remove="removeBook"/>
      
      

    </section>
  `,
  data() {
    return {
      books: null,
    };
  },
  created() {
    bookService.query().then((books) => (this.books = books));
  },
  methods: {
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
