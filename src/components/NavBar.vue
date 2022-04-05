<template>
  <div class="flex items-center justify-between bg-gray-100 px-4 shadow">
    <RouterLink to="/" class="py-4">Home</RouterLink>
    <RouterLink to="/favorites">Favorites</RouterLink>
  </div>
</template>

<script>
// import { useCart } from "../stores/cart";

export default {
  // setup() {
  //   const cartStore = useCart();
  //   return { cartStore };
  // },
  // computed: {
  //   numItems() {
  //     return this.cartStore.cartProducts.length;
  //   },
  // },
};
</script>
