<template>
  <div class= "nav" style="display: flex;">
    <div class="logo-nav">
      <v-img :src="icons[0]" alt="Excellent logo"></v-img>
    </div>
  <v-tabs class="options-nav"
  >
    <v-tab>
      Services
    </v-tab>
    <v-tab>
      Rates
    </v-tab>
    <v-tab>
      Contact
    </v-tab>
    <v-tab>
      Testimonials
    </v-tab>
  </v-tabs>
</div>
</template>

<script>

  export default {
    data: () => ({
      tab: null,
    icons: [
      require('../assets/icons/logo.svg'),
    ],
    }),
  }
</script>

<style>
.nav{
  height: 100%;
}
.logo-nav{
  margin-right: 500px;
  margin-left: 48px;
  margin-top: 24px;
  margin-bottom: 18px;
}
.options-nav{
  margin-left: 48px;
  margin-top: 26px;
  margin-bottom: 18px;
  color: #ffff;
}
</style>