<template>
   <!-- <NuxtLink :to="navigateToProductPage(id)"> -->
      <v-card class="mx-auto" max-width="344">
         <v-img :src="image" height="200px"></v-img>

         <v-card-title>{{ title }}</v-card-title>

         <v-card-subtitle>Цена: {{ price }}</v-card-subtitle>

         <v-card-actions>
            <v-btn color="primary" text>Купить</v-btn>

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
   <!-- </NuxtLink> -->
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
         //this.router.push(`/${id}`);
      }
   }
}
</script>