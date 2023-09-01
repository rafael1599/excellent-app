
<template>
  <v-carousel v-model="model" width:1920px style="height:1080px;">
    <v-carousel-item v-for="(place, i) in places" :key="place" >
      <v-sheet :place="place"  tile style=" background-color: #ffff; ">
        <v-row  class="align-content-center"  align="center" justify="center">
          <div class="card">
            <p class="text-h2">
              {{ places[i] }}
            </p>
            <v-img class="img-places" :src=images[i] :alt="'image ' + images[i]"></v-img>
            <p><a class="text">(Click here to view rates for this area)</a></p>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'rates',
  data: () => ({
    model: 0,
    places: [
      'TO MONSEY',
      'TO NEW CITY',
      'TO NANUET & BARDONIA',
      'WEST NYACK & NYACK',
      'NEW SQUARE',
      'POMONA',
      'AIRMONT',
      'SUFFERN',
      'CHESTNUT RIDGE',
      'PEARL RIVER',
      'AIRPORTS',
      'LONG DISTANCE',
    ],
    images: [
          
    require('../assets/places/to-monsey.svg'),
    require('../assets/places/to-new-city.svg'),
    require('../assets/places/to-nanuet-and-bardonia.svg'),
    require('../assets/places/WEST-NYACK-&-NYACK.svg'),
    require('../assets/places/NEW-SQUARE.svg'),
    require('../assets/places/POMONA.svg'),
    require('../assets/places/AIRMONT.svg'),
    require('../assets/places/SUFFERN.svg'),
    require('../assets/places/CHESTNUT RIDGE.svg'),
    require('../assets/places/PEARL-RIVER.svg'),
    require('../assets/places/AIRPORTS.svg'),
    require('../assets/places/LONG-DISTANCE.svg'),

          
        ],
    
  }),
}
</script>


<style>

.card p .text-h2{
  padding-top: 5%;
  color: black;
}
.text {
  font-size: small;
  text-decoration-color: black;
}

.img-places{
  width: 600px;
}
.img-card{
  align-items: center;
}
</style>