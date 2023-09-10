<template>
  <div class="container-index">
    <home />
    <welcome/>
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
import welcome from '~/components/welcome.vue';

export default {
  name: 'IndexPage',
  components: {
   home, services, rates, contact, welcome
  }
}
</script>

<style lang="scss">
.container-index{
  display: flex;
  flex-direction: column;
  gap: 30px;
}
@media (max-width: 700px) {
  .container-index{
    gap: 8px;
  }
}
</style>