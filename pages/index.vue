<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="4">
        <AppProductItem
          :id="product.id"
          :title="product.title"
          :subtitle="product.subtitle"
          :price="product.price"
          :image="product.image"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppProductItem from "~/components/AppProductItem.vue";
export default {
  name: "HomePage",
  data: () => ({}),
  computed: {
    products() {
      return this.$store.state.home.products;
    },
    isLoading() {
      return this.$store.state.home.isLoading;
    },
  },
  created() {
    this.$store.dispatch("home/LOAD_PRODUCTS", 1);
  },
  components: { AppProductItem }
}
</script>
