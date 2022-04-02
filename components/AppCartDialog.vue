<template>
   <v-dialog v-model="dialog" scrollable max-width="500px">
      <template v-slot:activator="{ on, attrs }">
         <v-btn class="white--text" color="teal" v-bind="attrs" v-on="on" depressed>
            <v-icon dark left>mdi-cart</v-icon>Корзина
         </v-btn>
      </template>

      <v-card>
         <v-card-title>Ваша Корзина</v-card-title>

         <v-divider></v-divider>

         <div class="cart-items-list">
            <v-card
               :key="product.id"
               v-for="product in cartItems"
               class="cart-item"
               elevation="0"
               outlined
            >
               <div class="cart-item__info">
                  <div class="cart-item__image">
                     <img :src="product.image" />
                  </div>
                  <v-card-text
                     class="cart-item__title"
                     @click="navigateToProductPage(product.id)"
                  >{{ product.title }}</v-card-text>
               </div>
               <v-card-actions>
                  <v-btn icon @click="handleDeleteFromCart(product.id)">
                     <v-icon>mdi-trash-can</v-icon>
                  </v-btn>
               </v-card-actions>
            </v-card>
         </div>

         <v-divider></v-divider>

         <v-card-actions>
            <v-btn color="blue darken-1" text @click="dialog = false">Закрыть</v-btn>
         </v-card-actions>
      </v-card>
   </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
   data() {
      return {
         dialog: false,
      }
   },
   computed: {
      ...mapGetters('app', [
         'cartItems',
      ]),
   },
   methods: {
      ...mapActions('app', {
         handleDeleteFromCart: 'DELETE_ITEM_FROM_CART'
      }),
      navigateToProductPage(id) {
         this.dialog = false;
         this.$router.push(`/${id}`);
      },
   }
}
</script>

<style scoped>
.cart-items-list {
   display: flex;
   flex-direction: column;
   gap: 10px;
   height: 300px;
   padding: 15px;
   overflow-y: auto;
}
.cart-item {
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 10px;
}
.cart-item__info {
   display: flex;
   align-items: center;
}
.cart-item__image {
   width: 75px;
   height: 75px;
   min-width: 75px;
   min-height: 75px;
   border-radius: 6px;
   overflow: hidden;
}
.cart-item__image img {
   widows: 100%;
   height: 100%;
   object-fit: contain;
}
.cart-item__title {
   cursor: pointer;
}
.cart-item__title:hover {
   text-decoration: underline;
}
</style>