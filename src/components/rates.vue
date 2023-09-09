
<template>
  <div class="rates" id="rates">
    <div class="rates-title">
      <span>Rates</span>
    </div>
    <div class="rates-content" id="rates-content">
      <v-btn class="arrow-slider arrow-slider-left" icon @click="navigateCards('prev')">
        <v-icon color="white">mdi-arrow-left-drop-circle</v-icon>
      </v-btn>
      <div class="card-custom rates-content-cards" v-for="p in places" :key="p.title">
          <img :src="p.img"/>
          <h2>{{p.title}}</h2>
          <p>{{p.text}}</p>
      </div>
      <v-btn class="arrow-slider arrow-slider-right" icon @click="navigateCards('next')">
        <v-icon color="white">mdi-arrow-right-drop-circle</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rates',
  data: () => ({
    model: 0,
    places: [
      {
        title: 'TO MONSEY',
        img: require('../assets/places/to-monsey.svg'),
        text: '(click here to view rates to Monsey)'
      },
      {
        title: 'TO NEW CITY',
        img: require('../assets/places/to-new-city.svg'),
        text: '(click here to view rates to New City)'
      },
      {
        title: 'TO NANUET & BARDONIA',
        img: require('../assets/places/to-nanuet-and-bardonia.svg'),
        text: '(click here to view rates to Nanuet & Bardonia)'
      },{
        title: 'WEST NYACK & NYACK',
        img: require('../assets/places/WEST-NYACK-&-NYACK.svg'),
        text: '(click here to view rates to WEST NYACK & NYACK)'
      },{
        title: 'NEW SQUARE',
        img: require('../assets/places/NEW-SQUARE.svg'),
        text: '(click here to view rates to NEW SQUARE)'
      },{
        title: 'POMONA',
        img: require('../assets/places/POMONA.svg'),
        text: '(click here to view rates in POMONA)'
      },{
        title: 'AIRMONT',
        img: require('../assets/places/AIRMONT.svg'),
        text: '(click here to view rates to AIRMONT)'
      },{
        title: 'SUFFERN',
        img: require('../assets/places/SUFFERN.svg'),
        text: '(click here to view rates to SUFFERN)'
      },{
        title: 'CHESTNUT RIDGE',
        img: require('../assets/places/CHESTNUT-RIDGE.svg'),
        text: '(click here to view rates to CHESTNUT RIDGE)'
      },{
        title: 'PEARL RIVER',
        img: require('../assets/places/PEARL-RIVER.svg'),
        text: '(click here to view rates to PEARL RIVER)'
      },{
        title: 'AIRPORTS',
        img: require('../assets/places/AIRPORTS.svg'),
        text: '(click here to view rates to AIRPORTS)'
      },{
        title: 'LONG DISTANCE',
        img: require('../assets/places/LONG-DISTANCE.svg'),
        text: '(click here to view rates to LONG DISTANCE)'
      },
    ],
    ratesUrl: require('../assets/icons/rates.svg')
  }),
  methods: {
    navigateCards(direction) {
      let d = document.getElementById("rates-content")
      let scroll = {
        behavior: "smooth"
      }
      if(direction == 'prev'){
        scroll.left = d.scrollLeft - 910
      }else{
        scroll.left = d.scrollLeft + 910
      }
      d.scrollTo(scroll)
    }
  }
}
</script>

<style lang="scss">
.rates{
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    &-title{
        background-color: #ffc738cc;
        border-radius: 10px;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            font-family: 'Nerko One';
            font-size: 82px;
        }
    }
    &-content{
      display: flex;
      gap: 30px;
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      &::-webkit-scrollbar{
        display: none;
      };
      .card-custom{
        min-width: 906px;
        max-width: 906px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        white-space: normal;
        overflow: hidden;
        background-color: #FFFFFF;
        height: 750px;
        img{
          margin-bottom: 16px;
        }
        h2{
          font-size: 48px;
          font-family: 'Inter';
          line-height: normal;
          margin-bottom: 8px;
        }
        p{
          font-size: 20px;
          font-family: 'Inter';
          max-width: 727px;
          text-align: center;
          line-height: normal;
        }
      }
    }
    .arrow-slider{
      position: absolute;
      top: 50%;
      width: 60px;
      height: 60px;
      i{
        font-size: 60px !important;
      }
      &-left{
        left: 24px;
      }
      &-right{
        right: 24px;
      }
    }
}
</style>
.rates {
  margin-top: 32px;
  width: 1860px;
  height: 1080px;
}
.rates-logo{
  margin-bottom: 32px;
}

.card{
text-align: center;
height: 100%;

}
.card p .text-h2 {
  padding-top: 5%;
  color: black;
}
.text-h2{
  margin-top: 12px;
}

.text {
  font-size: small;
  text-decoration-color: black;
}

.img-places {
  width: 600px;
}

.img-card {
  align-items: center;
}</style>