export default {
  template: `
        <header class="app-header">
            <h1>Book shop</h1>
            <nav>
                <RouterLink to="/" >Home</RouterLink>
                <RouterLink to="/books" >Books</RouterLink>
                <RouterLink to="/about" >About</RouterLink>

            </nav>
        </header>
    `,
  data() {
    return {};
  },
  methods: {},
};
