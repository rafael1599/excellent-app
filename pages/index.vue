<template>
  <div>
    <home />
    <services/>
    <rates />
    <contact />
  </div>
</template>

<script>
import home from '~/components/home.vue';
import services from '~/components/services.vue';
import rates from '~/components/rates.vue';
import contact from '~/components/contact.vue';

export default {
  name: 'IndexPage',
  components: {
   home, services, rates, contact
  }
}
</script>


<style>
@import "../assets/css/style.css";
</style>