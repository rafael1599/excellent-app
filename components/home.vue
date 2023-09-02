<template>
  <div class="home">
    <div class="card-white">
      <div class="card-white-left">
        <p>Serving Rockland County and surrounding areas</p>
        <p>Your Safe Ride, Pirate-Free</p>
        <v-btn
          color="#FFC736"
          width="344"
          height="72"
          rounded
          href="tel:8454417777"
          style="padding: 0 61px; margin-top: 10px;">
            <img :src="number">
        </v-btn>
      </div>
      <div class="card-withe-right">
        <v-img :src="taxiCar">
        </v-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    model: 0,
    number: require('../assets/icons/number.svg'),
    taxiCar: require('../assets/icons/taxi-car.svg')
  }),
}
</script>
<style lang="scss">
.home {
  width: 100%;
  background-color: #ffff;
  padding: 32px 48px;
  border-radius: 0 0 10px 10px;
  .card-white {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {
      max-width: 550px;
      p{
        font-size: 43px;
        font-family: 'Judson';
        letter-spacing: normal;
        line-height: normal;
        margin-bottom: 27px;
      }
    }
    &-right{
      max-width: 550px;
    }
  }
}



</style>