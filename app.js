import { createApp } from "./lib/vue.js";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import BookIndex from "./pages/BookIndex.js";
import AppHeader from "./cmps/AppHeader.js";
import AppFooter from "./cmps/AppFooter.js";

const options = {
  template: `<div>
    <AppHeader @change-route="route = $event"/>
  <section class="main-route">
      <HomePage v-if="route === 'home'"/>
      <BookIndex v-if="route === 'book-index'" />
      <AboutPage v-if="route === 'about'" />
  </section>
  <AppFooter />
</div>`,

  data() {
    return {
      route: "book-index",
    };
  },
  components: {
    HomePage,
    AboutPage,
    BookIndex,
    AppHeader,
    AppFooter,
  },
};
const app = createApp(options);

app.mount("#app");
