export default {
  props: ["book"],
  template: `
      <article class="book-preview" @click="clickHandler">
        <h2>{{ book.title }}</h2>
        <img :src="book.thumbnail" alt="book img" />
        <h2>Price: {{ book.listPrice.price }}<span>{{  book.listPrice.currency}} </span> </h2>
        <!-- <RouterLink :to="'/books/'+ book.id">Details | </RouterLink> -->
        
      </article>
      <RouterLink :to="'/books/edit/' + book.id">Edit</RouterLink>
    `,

  methods: {
    clickHandler() {
      this.$router.push("/books/" + this.book.id);
    },
  },
};
