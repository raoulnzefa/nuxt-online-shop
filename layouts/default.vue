<template>
  <v-app app>
    <AppHeader />

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <AppScrollToTopBtn />
    <AppFooter />
  </v-app>
</template>

<script>
import AppScrollToTopBtn from "~/components/AppScrollToTopBtn.vue";
export default {
  name: "DefaultLayout",
  data: () => ({}),
  methods: {},
  components: { AppScrollToTopBtn }
}
</script>
