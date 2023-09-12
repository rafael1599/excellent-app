<template>
  <v-app-bar
    elevation="0"
    height="126"
    color="#EAEAEA">
    <v-app-bar-title>
      <img :src="logoUrl"/>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-row v-if="!isMobile">
      <v-col cols="12" md="4">
        <v-btn
          class="links"
          color="transparent"
          height="94"
          elevation="0"
          href="#services">
          Services
        </v-btn>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn
          class="links"
          color="transparent"
          height="94"
          elevation="0"
          href="#rates">
          Rates
        </v-btn>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn
          class="links"
          color="transparent"
          height="94"
          elevation="0"
          href="#contact">
          Contact
        </v-btn>
      </v-col>
    </v-row>
    <v-app-bar-nav-icon v-else @click.stop="changeDrawer()"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    drawer: {
      type: Boolean,
      default: () => false
    }
  },
  data: () => ({
    tab: null,
    items: ["web", "shopping", "videos", "images", "news"],
    logoUrl: require("@/assets/icons/logo.svg")
  }),
  computed: {
    ...mapState("vuetify", ['isMobile'])
  },
  methods: {
    changeDrawer(){
      this.$emit("changeDrawer", !this.drawer)
    }
  }
};
</script>

<style lang="scss">
.v-app-bar {
  margin-top: 30px !important;
  .v-toolbar__content {
    background-color: #ffffff;
    margin: 0px 30px 0px 30px;
    border-radius: 10px 10px 0px 0px;
    padding: 0px 48px;
    gap: 8px;
    .links {
      color: #000000;
      text-transform: capitalize;
      font-size: 27px;
      font-weight: bold;
      letter-spacing: normal;
      max-width: 219px;
      width: 100%;
    }
  }
}
@media (max-width: 700px) {
  .v-app-bar {
    margin-top: 8px !important;
    .v-toolbar__content {
      margin: 0px 8px 0px 8px;
      padding: 0px 32px;
    }
    img{
      max-width: calc(100% - 100px);
    }
  }
}
</style>