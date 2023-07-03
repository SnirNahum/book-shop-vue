export default {
  props: ["book"],
  template: `
      <article class="book-preview">
        <h2>{{ book.title }}</h2>
        <img :src="book.thumbnail" alt="book img" />
        <h2>Price: {{ book.listPrice.price }}<span>{{  book.listPrice.currencyCode}} </span> </h2>
        <RouterLink :to="'/books/'+ book.id">Details | </RouterLink>
        <RouterLink :to="'/books/edit/' + book.id">Edit</RouterLink>
      </article>
    `,
  computed: {},
};
