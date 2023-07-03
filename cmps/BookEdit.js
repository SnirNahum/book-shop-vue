import { bookService } from "../services/book.service.js";

export default {
  template: `<form @submit.prevent="save" class="book-edit">
    <h1> Add book</h1>
    <input v-model="book.title" type="text"  placeholder="Enter book name" />
    <input v-model="book.price" type="number"/>
    <button>save</button>
  </form>`,
  data() {
    return {
      book: bookService.getEmptyBook(),
    };
  },
  methods: {
    save() {
      this.$emit("save", this.book);
      this.book = bookService.getEmptyBook();
    },
  },
};
