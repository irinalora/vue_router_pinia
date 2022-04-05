<template>
  Favorites

  <div class="grid grid-cols-4 gap-4">
    <div v-for="film in films" :key="film.url" class="rounded bg-white shadow">
      <RouterLink :to="`/films/${getId(film.url)}`">
        <img :src="`/posters/${getId(film.url)}.jpeg`" />

        {{ film.title }}</RouterLink
      >
    </div>
  </div>
</template>

<script>
import { useFavorites } from "../stores/favorites";

export default {
  setup() {
    const favoritesStore = useFavorites();

    return { favoritesStore };
  },
  computed: {
    films() {
      return this.favoritesStore.favoriteFilms;
    },
  },
  methods: {
    getId(url) {
      return url.split("/").reverse()[1];
    },
  },
};
</script>
