<template>
  <div style="display: flex; background-color: rgb(181, 181, 181); height: 128px;">
    <logo style="height: 100%; margin-right: 30%;">
    </logo>
  <v-tabs style="height: 126px;"
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
import logo from './logo.vue';


  export default {
    components: {logo
  },
    data: () => ({
      tab: null,
    }),
  }
</script>
