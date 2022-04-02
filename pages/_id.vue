<template>
   <v-container v-if="isLoading" style="height: 400px;">
      <v-row class="fill-height" align-content="center" justify="center">
         <v-col class="text-subtitle-1 text-center" cols="12">Загрузка</v-col>
         <v-col cols="6">
            <v-progress-linear color="primary accent-4" indeterminate rounded height="6"></v-progress-linear>
         </v-col>
      </v-row>
   </v-container>
   <v-container v-else>
      <v-row>
         <v-col cols="12">
            <v-btn class="ma-2" outlined color="primary" @click="handleGoBack">
               <v-icon left>mdi-chevron-left</v-icon>Назад
            </v-btn>
         </v-col>
      </v-row>

      <v-row>
         <v-col cols="4">
            <v-card elevation="0" outlined>
               <div class="product-image pa-0">
                  <img :src="product.image" />
               </div>
            </v-card>
         </v-col>

         <v-col cols="8">
            <v-card elevation="0" outlined>
               <v-card-title class="product-title">{{ product.title }}</v-card-title>
               <v-card-subtitle>{{ product.subtitle }}</v-card-subtitle>
            </v-card>

            <v-card elevation="0" outlined class="mt-5 mb-5">
               <div class="product-info">
                  <v-card-subtitle>Страна</v-card-subtitle>
                  <span class="product-info__line"></span>
                  <v-card-subtitle class="text--primary">{{ product.country }}</v-card-subtitle>
               </div>
               <div class="product-info">
                  <v-card-subtitle>Производитель</v-card-subtitle>
                  <span class="product-info__line"></span>
                  <v-card-subtitle class="text--primary">{{ product.manufacturer }}</v-card-subtitle>
               </div>
            </v-card>
         </v-col>
      </v-row>

      <v-row v-if="product.instruction" class="mt-5">
         <v-col cols="12">
            <v-card elevation="0" outlined class="pa-2" v-html="product.instruction"></v-card>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
   name: 'ProductPage',
   data() {
      return {}
   },
   computed: {
      id() {
         return this.$route.params.id;
      },
      product() {
         return this.$store.state.product.data;
      },
      isLoading() {
         return this.$store.state.product.isLoading;
      }
   },
   methods: {
      ...mapActions("product", {
         getProduct: 'GET_PRODUCT'
      }),
      handleGoBack() {
         this.$router.push('/')
      }
   },
   created() {
      this.getProduct(this.id)
   }
}
</script>

<style scoped>
.product-image {
   width: 100%;
   height: 300px;
}
.product-image img {
   width: 100%;
   height: 100%;
   object-fit: contain;
}
.product-title {
   word-break: break-word !important;
}
.product-info {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.product-info__line {
   display: inline-block;
   width: 100%;
   margin-top: 10px;
   border-bottom: 1px dotted black;
}
</style>