<template>
  <v-app>
    <notifications position="top center" group="info" />
    <navigation />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "AppDictionaries",

  components: { Navigation },

  data: () => ({}),
  mounted() {
    this.$router.push("/");
  },
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
</style>
