import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import Film from "./views/Film.vue";
import Character from "./views/Character.vue";
import Favorites from "./views/Favorites.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/films/:id",
    name: "film",
    component: Film,
    children: [
      {
        path: "characters/:characterId",
        component: Character,
      },
    ],
  },
  {
    path: "/favorites",
    component: Favorites,
  },
  { path: "/:path(.*)", component: NotFound },
];
