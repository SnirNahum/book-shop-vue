export default {
  props: ["book"],
  template: `
      <article class="book-preview">
        <h2>{{ book.title }}</h2>
        <img :src="displayImage" alt="book img" />
        <h2>Price: {{ displayBookAmount }}</h2>
      </article>
    `,
  computed: {
    displayBookAmount() {
      return this.book.listPrice.amount;
    },
    displayImage(){
      return this.book.thumbnail;
    }
  },
};
