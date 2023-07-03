export default {
    template: `
        <header class="app-header">
            <h1>Book shop</h1>
            <nav>
                <a href="#" @click="setRoute('home')">Home</a>
                <a href="#" @click="setRoute('book-index')">Books</a>
                <a href="#" @click="setRoute('about')">About</a>
            </nav>
        </header>
    `,
    methods: {
        setRoute(route) {
            this.$emit('change-route', route)
        }
    }
}