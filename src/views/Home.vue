<template>
  <div>Home page</div>
  <div v-if="loading">Loading...</div>
  <div v-if="error" class="text-red-600">
    {{ error }}
  </div>
  <div v-if="data" class="grid grid-cols-4 gap-4">
    <div
      v-for="film in data.results"
      :key="film.url"
      class="rounded bg-white shadow"
    >
      <RouterLink :to="`/films/${getId(film.url)}`">
        <img :src="`/posters/${getId(film.url)}.jpeg`" />

        {{ film.title }}</RouterLink
      >
      <button class="block border" @click="addToFavorites(film)">
        Add to favorites
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useFavorites } from "../stores/favorites";

export default {
  name: "Home",
  setup() {
    const favoritesStore = useFavorites();

    return { favoritesStore };
  },
  data() {
    return {
      data: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async getFilms() {
      this.loading = true;

      // OPTION 1: fetch amb then
      // fetch("https://swapi.dev/api/films")
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw new Error(response.statusText);
      //     }

      //     return response.json();
      //   })
      //   .then((data) => {
      //     this.data = data;
      //   })
      //   .catch((error) => {
      //     this.error = error;
      //   })
      //   .finally(() => {
      //     this.loading = false;
      //   });

      // OPTION 2: fetch amb async/await
      // try {
      //   const response = await fetch("https://swapi.dev/api/films");
      //   if (!response.ok) {
      //     throw new Error(response.statusText);
      //   }
      //   this.data = await response.json();
      // } catch (error) {
      //   this.error = error;
      // } finally {
      //   this.loading = false;
      // }

      // OPTION 3: axios amb then
      // axios("https://swapi.dev/api/films")
      //   .then(({ data }) => {
      //     this.data = data;
      //   })
      //   .catch((error) => {
      //     this.error = error;
      //   })
      //   .finally(() => {
      //     this.loading = false;
      //   });

      // OPTION 4: axios amb async/await
      try {
        const { data } = await axios("https://swapi.dev/api/films");
        this.data = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    getId(url) {
      return url.split("/").reverse()[1];
    },
    addToFavorites(film) {
      this.favoritesStore.favoriteFilms.push(film);
    },
  },
  mounted() {
    this.getFilms();
  },
};
</script>
