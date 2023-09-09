<template>
  <v-app>
    <navbar />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import navbar from '~/components/navbar.vue';

export default {
  components: {
    navbar,
  },
  name: 'DefaultLayout',
  data: () => ({
    
  })
}
</script>

<style lang="scss">
.theme--light.v-application{
  background-color: #EAEAEA !important;
  .v-main__wrap{
    padding: 0 30px 0 30px;
  }
}
</style>