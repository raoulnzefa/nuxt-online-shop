<template>
   <v-card class="mx-auto" elevation="0" outlined>
      <div class="card-image">
         <img :src="image" />
      </div>

      <v-card-title class="card-title" @click="navigateToProductPage(id)">{{ title }}</v-card-title>

      <v-card-subtitle>Цена: {{ price }} $</v-card-subtitle>

      <v-card-actions>
         <v-btn color="primary">В корзину</v-btn>

         <v-spacer></v-spacer>

         <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
         </v-btn>
      </v-card-actions>

      <v-expand-transition>
         <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>{{ subtitle }}</v-card-text>
         </div>
      </v-expand-transition>
   </v-card>
</template>

<script>
export default {
   props: {
      id: Number,
      title: String,
      subtitle: {
         type: String,
         default: ''
      },
      image: String,
      price: Number,
   },
   data: () => ({
      show: false,
   }),
   methods: {
      navigateToProductPage(id) {
         this.$router.push(`/${id}`);
      }
   }
}
</script>

<style scoped>
.card-image {
   width: 100%;
   max-width: 300px;
   height: 200px;
   margin: 0 auto;
}
.card-image img {
   width: 100%;
   height: 100%;
   object-fit: contain;
}
.card-title {
   word-break: break-word !important;
   cursor: pointer;
}
.card-title:hover {
   text-decoration: underline;
}
</style>