<template>
  <div>
    <navbar />
    <services />
    <rates />
    <contact />
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue';
import services from '~/components/services.vue';
import rates from '~/components/rates.vue';
import contact from '~/components/contact.vue';
import logo from '~/components/logo.vue';

export default {
  name: 'IndexPage',
  components: {
    navbar, services, rates, contact, logo
  }
}
</script>


<style>
@import "../assets/css/style.css";
</style>