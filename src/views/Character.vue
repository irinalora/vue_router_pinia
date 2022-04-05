<template>
  <div v-if="loading">Loading...</div>
  <div v-if="error" class="text-red-600">
    {{ error }}
  </div>
  <div v-if="data">
    <h3>{{ data.name }}</h3>
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
    };
  },
  computed: {
    characterId() {
      return this.$route.params.characterId;
    },
  },
  methods: {
    async getCharacter() {
      this.loading = true;
      this.data = null;
      try {
        const { data } = await axios(
          `https://swapi.dev/api/people/${this.characterId}`
        );
        this.data = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getCharacter();
  },
  watch: {
    characterId() {
      this.getCharacter();
    },
  },
};
</script>
