import BookIndex from "./pages/BookIndex.js";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";

import BookDetails from "./pages/BookDetails.js";
import BookEdit from "./pages/BookEdit.js";

const { createRouter, createWebHashHistory } = VueRouter;

const AboutTeam = {
  template: `<section>
    <h1>Our Team</h1>
    <p>Our Team...</p> 
     </section>  `,
};
const AboutGoals = {
  template: `<section>
    <h1>Our Goals</h1>
    <p>Our Goals...</p>
  </section>`,
};

const options = {
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/books",
      component: BookIndex,
    },
    {
      path: "/about",
      component: AboutPage,
      children: [
        {
          path: "team",
          component: AboutTeam,
        },
        {
          path: "goals",
          component: AboutGoals,
        },
      ],
    },
    {
      path: "/books/:bookId",
      component: BookDetails,
    },
    {
      path: "/books/edit/:bookId?",
      component: BookEdit,
    },
  ],
};

export const router = createRouter(options);
