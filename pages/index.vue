<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" md="4" sm="6" xs="12">
        <v-skeleton-loader v-if="isLoading" type="card-avatar, article, actions"></v-skeleton-loader>
        <AppProductItem
          v-else
          :id="product.id"
          :title="product.title"
          :subtitle="product.subtitle"
          :price="product.price"
          :image="product.image"
          :product="product"
          :isInCart="checkItemIsInCart(product.id)"
          @handle-add-to-cart="handleAddToCart"
          @handle-delete-from-cart="handleDeleteFromCart"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <v-pagination v-model="currentPage" :length="paginatorLength"></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "HomePage",
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    ...mapGetters("app", [
      "checkItemIsInCart",
    ]),
    ...mapGetters("home", [
      "isLoading",
      "products",
      'paginatorLength'
    ])
  },
  methods: {
    ...mapActions("home", {
      handleLoadProducts: "LOAD_PRODUCTS"
    }),
    ...mapActions("app", {
      handleInitCart: "INIT_CART_ITEMS",
      handleAddToCart: "ADD_ITEM_TO_CART",
      handleDeleteFromCart: "DELETE_ITEM_FROM_CART",
    }),
  },
  watch: {
    currentPage(newPage, oldPage) {
      this.handleLoadProducts(newPage);
    }
  },
  created() {
    this.handleInitCart();
    this.handleLoadProducts(this.currentPage);
  },
}
</script>
