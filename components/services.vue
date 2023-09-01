<template>
  <div style="width:1920px; height:1080px;">
    <div class="card-white" style="display: flex; background-color: #ffff; border-radius: 10px;">
      <div class="card-white-izq">
        <h1 style="font-size: 82px;">Excellent Taxi</h1>
        <p style="font-size: 63px;">at Rockland county New York</p>
        <p style="margin-top: 30px; font-size: 43px;">Your Safe Ride, Pirate-Free</p>
        <a href="tel:8454417777"><v-img style="margin-top: 30px;" :src="icons[0]"></v-img></a>
      </div>
      <div class="card-withe-der">
        <v-img :src="icons[1]">
        </v-img>
      </div>
    </div>
    <div class="card-gray" style="width: 1920px; border-radius: 10px; background-color: #D9D9D9; font-size: 50PX; margin-top: 30px;">
      <h2>Welcome to Excellent Taxi</h2>
      <p style="    margin-right: 86px; margin-left: 106px; margin-top: 102px; margin-bottom: 72px;">Your Premier Transportation Partner! We provide top-notch taxi services with modern vehicles and skilled drivers,
        ensuring a seamless journey. Whether you need a quick ride or airport transfers, trust us for punctuality, safety,
        and exceptional service. Book with us today!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'services',
  data: () => ({
    model: 0,
    icons: [

      require('../assets/icons/number.svg'),
      require('../assets/icons/taxi-car.svg'),



    ],

  }),
}
</script>