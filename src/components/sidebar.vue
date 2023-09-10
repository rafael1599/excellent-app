<template>
  <v-navigation-drawer v-model="drawerSelected" absolute right>
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="warning--text text--accent-4">
        <v-list-item href="#services" @click="drawerSelected = false">
          <v-list-item-title>Services</v-list-item-title>
        </v-list-item>
        <v-list-item href="#rates" @click="drawerSelected = false">
          <v-list-item-title>Rates</v-list-item-title>
        </v-list-item>
        <v-list-item href="#contact" @click="drawerSelected = false">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
  
<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      group: null
    }
  },
  computed: {
    drawerSelected:{
      get() {
        return this.drawer
      },
      set(value) {
        this.$emit("changeDrawer", value)
      }
    }
  }
};
</script>
  
<style lang="scss">
</style>