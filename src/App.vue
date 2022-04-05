<template>
  <NavBar />
  <div class="container mx-auto p-4">
    <h1 class="mb-4 text-center">Star Wars App</h1>
    <hr class="my-4" />
    <RouterView />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
