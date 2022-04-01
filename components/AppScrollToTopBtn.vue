<template>
   <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
      class="button"
   >
      <v-icon>mdi-chevron-up</v-icon>
   </v-btn>
</template>

<script>
export default {
   name: "AppScrollToTopBtn",
   data: () => ({
      fab: false
   }),

   methods: {
      onScroll(e) {
         if (typeof window === 'undefined') return
         const top = window.pageYOffset || e.target.scrollTop || 0
         this.fab = top > 20
      },
      toTop() {
         this.$vuetify.goTo(0)
      }
   }
}
</script>
.button {
   transition: all .2s;
}
<style scoped>
</style>