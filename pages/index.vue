<template>
  <div>
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

export default {
  name: 'IndexPage',
  components: {
   services, rates, contact
  }
}
</script>


<style>
@import "../assets/css/style.css";
</style>