<template>
  <div class="home">
    <div class="card-white">
      <div class="card-white-izq">
        <div class="container">
          <p style="font-size: 63px;">Serving Rockland County and surrounding areas</p>
          <p style="margin-top: 30px; font-size: 43px;">Your Safe Ride, Pirate-Free</p>
          <a href="tel:8454417777"><v-img class="home-number" :src="icons[0]"></v-img></a>
        </div>
      </div>
      <div class="card-withe-der">
        <v-img :src="icons[1]">
        </v-img>
      </div>
    </div>
    <div class="card-gray">
      <div class="container">
        <h2>Welcome to Excellent Taxi</h2>
        <p>Your Premier Transportation Partner! We provide top-notch taxi home with modern vehicles and skilled drivers,
          ensuring a seamless journey. Whether you need a quick ride or airport transfers, trust us for punctuality,
          safety,
          and exceptional service.</p>
        <p>Book with us today!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    model: 0,
    icons: [

      require('../assets/icons/number.svg'),
      require('../assets/icons/taxi-car.svg'),



    ],

  }),
}
</script>
<style>
.home {
  margin-top: 80px;
  width: 1920px;
  height: 1080px;
}

.container {
  margin-top: 00px;
  margin-left: 48px;
  margin-right: 1081px;
  padding-left: 0px;
  font-size: 43px;
}

.home-number {
  height: 72px;
  width: 344px;

  margin-top: 30px;
}

.card-white {
  width: 1860px;
  height: 548px;
  display: flex;
  background-color: #ffff;
  border-radius: 10px;

}

.card-gray {
  border-radius: 10px;
  background-color: #D9D9D9;
  font-size: 50PX;
  margin-top: 30px;
  text-align: center;
  width: 1860px;
  height: 511px;
}

.card-white-izq {
  width: 50%;
}</style>