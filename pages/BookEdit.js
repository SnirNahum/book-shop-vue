import { bookService } from "../services/book.service.js";

export default {
  template: `<form @submit.prevent="save" class="book-edit">
    <h1> {{(bookToEdit.id) ? 'Edit' : 'Add'}} book</h1>
    <input v-model="bookToEdit.title" type="text"  placeholder="Enter book name" />
    <input v-model="bookToEdit.listPrice.price" type="number"/>
    <hr/>
    <RouterLink to="/books">Cancel</RouterLink>

    <button :disabled="!isValid">save</button>
  </form>`,
  data() {
    return {
      bookToEdit: bookService.getEmptyBook(),
    };
  },
  computed: {
    isValid() {
      return this.bookToEdit.title.length > 0;
    },
  },
  created() {
    const { bookId } = this.$route.params;
    if (!bookId) return;
    bookService
      .get(bookId)
      .then((book) => {
        this.bookToEdit = book;
      })
      .catch((err) => {
        alert("Cannot load Book");
        this.$router.push("/book");
      });
  },
  methods: {
    save() {
      bookService
        .save(this.bookToEdit)
        .then((savedBook) => {
          this.$router.push("/books");
        })
        .catch((err) => {
          alert("Cannot load Book");
          this.$router.push("/book");
        });
    },
  },
};
