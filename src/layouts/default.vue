<template>
  <v-app>
    <navbar :drawer="drawer" @changeDrawer="changeDrawer($event)"/>
    <sidebar :drawer="drawer" @changeDrawer="changeDrawer($event)"/>
    <v-main>
      <Nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import navbar from '~/components/navbar.vue';
import sidebar from '~/components/sidebar.vue';
import { mapMutations } from 'vuex'
export default {
  components: {
    navbar,
    sidebar
  },
  name: 'DefaultLayout',
  data(){
    return{
      drawer: false
    }
  },
  methods: {
    ...mapMutations("vuetify", ['SET_IS_MOBILE', 'SET_BREAKPOINT']),
    validateSize(param){
      if(['xs','sm','md'].includes(param)){
        this.SET_IS_MOBILE(true)
      }else{
        this.SET_IS_MOBILE(false)
      }
      this.SET_BREAKPOINT(this.$vuetify.breakpoint.name)
    },
    changeDrawer(param){
      this.drawer = param
    }
  },
  watch: {
    "$vuetify.breakpoint.name"(val){
      this.validateSize(val)
    }
  },
  mounted() {
    this.validateSize(this.$vuetify.breakpoint.name)
  }
}
</script>

<style lang="scss">
body{
  overflow: hidden;
}
.theme--light.v-application{
  background-color: #EAEAEA !important;
  .v-main__wrap{
    padding: 0 30px 0 30px;
  }
}

@media (max-width: 700px) {
  .theme--light.v-application{
    .v-main__wrap{
      padding: 0 8px 0 8px;
    }
  }
}
</style>