<template>
  <div v-if="loading">Loading...</div>
  <div v-if="error" class="text-red-600">
    {{ error }}
  </div>
  <div v-if="data">
    <div class="mb-4">
      <h2 class="font-semibold">{{ data.title }}</h2>
      <div>Episode {{ data.episode_id }}</div>
      <div>Director: {{ data.director }}</div>
    </div>
    <h3 class="font-semibold">Characters</h3>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-1 rounded bg-white p-4 shadow">
        <div v-for="character in characters" :key="character.url">
          <RouterLink
            :to="`/films/${$route.params.id}/characters/${getId(
              character.url
            )}`"
            class="hover:text-teal-500"
            >{{ character.name }}</RouterLink
          >
        </div>
      </div>
      <div class="col-span-2 rounded bg-white p-4 shadow">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: null,
      loading: false,
      error: null,
      characters: [],
    };
  },

  methods: {
    async getFilm() {
      this.loading = true;
      try {
        const { data } = await axios(
          `https://swapi.dev/api/films/${this.$route.params.id}`
        );
        this.data = data;
        this.getCharacters();
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async getCharacters() {
      // aqui ja puc accedir a this.data.characters
      const promiseArray = this.data.characters.map((url) => axios(url));
      const response = await Promise.all(promiseArray);
      this.characters = response.map(({ data }) => data);
    },
    getId(url) {
      return url.split("/").reverse()[1];
    },
  },
  mounted() {
    this.getFilm();
  },
};
</script>
