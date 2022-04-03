<template>
   <v-btn color="purple" @click="handleToggleDarkMode" depressed dark>
      <v-icon v-if="darkmode" left>mdi-white-balance-sunny</v-icon>
      <v-icon v-else left>mdi-moon-waxing-crescent</v-icon>
      {{ buttonTitle }}
   </v-btn>
</template>

<script>
export default {
   data() {
      return {
         darkmode: false
      }
   },
   computed: {
      buttonTitle() {
         return this.darkmode ? 'Light' : 'Dark';
      },
   },
   watch: {
      darkmode(newVal, oldVal) {
         this.handleInitDarkMode()
      }
   },
   created() {
      if (process.browser) {
         if (localStorage.getItem('DarkMode')) {
            const cookieValue = localStorage.getItem('DarkMode') === 'true'
            this.darkmode = cookieValue
         } else {
            this.handleInitDarkMode()
         }
      }
   },
   methods: {
      handleToggleDarkMode() {
         this.darkmode = !this.darkmode
      },
      handleInitDarkMode() {
         if (process.browser) {
            if (this.darkmode) {
               this.$vuetify.theme.dark = true
               localStorage.setItem('DarkMode', true)
            } else {
               this.$vuetify.theme.dark = false
               localStorage.setItem('DarkMode', false)
            }
         }
      }
   }
}
</script>