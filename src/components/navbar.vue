<template>
    <v-app-bar
    class="d-none d-sm-block" cols="12" sm="6"
    elevation="0"
    height="126"
    color="#EAEAEA">
      <v-app-bar-title>
        <img :src="logoUrl" href="#home">
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-col 
      class="d-none d-md-block" cols="12" md="6">
        <v-btn 
        class="links"
        color="transparent"
        height="94"
        elevation="0"
        href="#services">Services</v-btn>
        <v-btn 
        class="links"
        color="transparent"
        height="94"
        elevation="0"
        href="#rates">Rates</v-btn>
        <v-btn 
        class="links"
        color="transparent"
        height="94"
        elevation="0"
        href="#contact">Contact</v-btn>
        <v-btn 
        class="links"
        color="transparent"
        height="94"
        elevation="0"
        to="testimonials">Testimonials</v-btn>
    </v-col>
      </v-app-bar>
</template>

<script>

  export default {
    data: () => ({
      tab: null,
      items: [
          'web', 'shopping', 'videos', 'images', 'news',
      ],
      logoUrl: require('../assets/icons/logo.svg'),
    }),
  }
</script>

<style lang="scss">
.v-app-bar{
  margin-top: 30px !important;
}
.v-toolbar__content{
  background-color: #ffffff;
  margin: 0px 30px 0px 30px;
  border-radius: 10px 10px 0px 0px;
  padding: 0px 48px;
  gap: 8px;
  .links{
    color: #000000;
    text-transform: capitalize;
    font-size: 27px;
    font-weight: bold;
    letter-spacing: normal;
    max-width: 219px;
    width: 100%;
  }
}
</style>