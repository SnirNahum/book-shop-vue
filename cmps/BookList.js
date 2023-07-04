import BookPreview from "./BookPreview.js";

export default {
  props: ["books"],
  template: `
    <section class="book-list">
      <ul>
        <li class v-for="book in books" :key="book.id">
          <BookPreview :book="book" />
          <section class="actions">
            <button @click="onRemoveBook(book.id)">X</button>
          </section>
        </li>
      </ul>
    </section>
  `,
  methods: {
    onRemoveBook(bookId){
      this.$emit("remove", bookId)
    }
  },
  components: {
    BookPreview,
  },
};
