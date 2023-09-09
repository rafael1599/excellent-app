<template>
  <v-app>
    <navbar/>
    <v-main>
      <Nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import navbar from '~/components/navbar.vue';
import { mapMutations } from 'vuex'
export default {
  components: {
    navbar,
  },
  name: 'DefaultLayout',
  methods: {
    ...mapMutations("vuetify", ['SET_IS_MOBILE', 'SET_BREAKPOINT'])
  },
  watch: {
    "$vuetify.breakpoint.name"(val){
      if(['xs','sm','md'].includes(val)){
        this.SET_IS_MOBILE(true)
      }else{
        this.SET_IS_MOBILE(false)
      }
      this.SET_BREAKPOINT(val)
    }
  }
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