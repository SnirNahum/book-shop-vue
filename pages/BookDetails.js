import { bookService } from "../services/book.service.js";

export default {
  template: `<section class="book-details" v-if="book">
    <h2>{{book.title}}</h2>
    <h3>{{book.price}}</h3>
    <pre>{{book}}</pre> 
    <RouterLink to="/books">Back to list</RouterLink>
           
  </section>`,
  data() {
    return {
      book: null,
    };
  },
  created() {
    const { bookId } = this.$route.params;
    bookService
      .get(bookId)
      .then((book) => {
        this.book = book;
      })
      .catch((err) => {
        alert('Cannot load book')
        this.$router.push('/books')
      });
  },
  methods: {},
};
