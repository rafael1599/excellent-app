<template>
  <div class="home" id="home">
    <v-row class="card-white" align="center" justify="space-between" >
      <v-col class="card-white-left" cols="12" md="6">
        <p>Serving Rockland County and surrounding areas</p>
        <p>Your Safe Ride, Pirate-Free</p>
        <v-btn
          color="#FFC736"
          width="344"
          max-width="100%"
          height="72"
          rounded
          href="tel:8454417777">
            <img :src="number">
        </v-btn>
      </v-col>
      <v-col class="card-white-right" cols="12" md="6">
        <img :src="taxi" v-if="!isMobile"/>
        <img :src="taxiCar" v-else/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home',
  data: () => ({
    model: 0,
    number: require('../assets/icons/number.svg'),
    taxi: require('../assets/icons/car-and-van.svg'),
    taxiCar: require('../assets/icons/taxi-car.svg')
  }),
  computed: {
    ...mapState("vuetify", ['isMobile'])
  }
}
</script>
<style lang="scss">
.home {
  width: 100%;
  background-color: #ffff;
  padding: 32px 48px;
  border-radius: 0 0 10px 10px;
  .card-white {
    &-left {
      p{
        font-size: 43px;
        font-family: 'Judson';
        letter-spacing: normal;
        line-height: normal;
        margin-bottom: 27px;
      }
    }
    &-right{
      display: flex;
      justify-content: flex-end;
      img{
        max-width: 100%;
      }
    }
  }
}
@media (max-width: 959px) {
  .home{
    .card-white{
      flex-direction: column-reverse;
      &-left{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        p{
          font-size: 32px;
          font-family: 'Judson';
          letter-spacing: normal;
          line-height: normal;
          margin-bottom: 16px;
        }
      }
      &-right{
        justify-content: center;
      }
    }
  }
}

@media (max-width: 450px) {
  .home{
    padding: 32px 32px;
  }
}
</style>