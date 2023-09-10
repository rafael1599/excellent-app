
<template>
  <div class="rates" id="rates">
    <div class="rates-title">
      <span>Rates</span>
    </div>
    <div class="rates-content" id="rates-content">
      <v-btn class="arrow-slider arrow-slider-left" icon @click="navigateCards('prev')">
        <v-icon color="white">mdi-arrow-left-drop-circle</v-icon>
      </v-btn>
      <v-dialog
        v-model="dialog"
        width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">{{citySelected.name}}</span>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
              :loading="loadingSheets"
              loading-text="Loading rates..."
              :items-per-page="-1"
              :hide-default-footer="true"
              class="elevation-1"
            ></v-data-table>
          </v-card-text>
        </v-card>
      </v-dialog>
      <div class="card-custom rates-content-cards" v-for="p in places" :key="p.title"
          @click="openModal(p)">
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
const URLSHEETSGOOGLEAPI = 'https://sheets.googleapis.com/v4/spreadsheets/1jG959EGu4R52mtSm7Bu1dJna9VCzIBM57xUPYS60kAU'
export default {
  name: 'rates',
  data: () => ({
    model: 0,
    loadingSheets: true,
    headers: [
      {
        text: 'Route',
        sortable: true,
        value: 'route',
      },
      {
        text: 'Rate',
        sortable: true,
        value: 'rate',
      }
    ],
    items: [],
    places: [
      {
        title: 'TO MONSEY',
        img: require('../assets/places/to-monsey.svg'),
        text: '(click here to view rates to Monsey)',
        sheetName: '1. MONSEY'
      },
      {
        title: 'TO NEW CITY',
        img: require('../assets/places/to-new-city.svg'),
        text: '(click here to view rates to New City)',
        sheetName: '2. NEW CITY'
      },
      {
        title: 'TO NANUET & BARDONIA',
        img: require('../assets/places/to-nanuet-and-bardonia.svg'),
        text: '(click here to view rates to Nanuet & Bardonia)',
        sheetName: '3. NANUET & BARDONIA'
      },{
        title: 'WEST NYACK & NYACK',
        img: require('../assets/places/WEST-NYACK-&-NYACK.svg'),
        text: '(click here to view rates to WEST NYACK & NYACK)',
        sheetName: '4. WEST NYACK & NYACK'
      },{
        title: 'NEW SQUARE',
        img: require('../assets/places/NEW-SQUARE.svg'),
        text: '(click here to view rates to NEW SQUARE)',
        sheetName: '5. NEW SQUARE'
      },{
        title: 'POMONA',
        img: require('../assets/places/POMONA.svg'),
        text: '(click here to view rates in POMONA)',
        sheetName: '6. POMONA'
      },{
        title: 'AIRMONT',
        img: require('../assets/places/AIRMONT.svg'),
        text: '(click here to view rates to AIRMONT)',
        sheetName: '7. AIRMONT'
      },{
        title: 'SUFFERN',
        img: require('../assets/places/SUFFERN.svg'),
        text: '(click here to view rates to SUFFERN)',
        sheetName: '8. SUFFERN'
      },{
        title: 'CHESTNUT RIDGE',
        img: require('../assets/places/CHESTNUT-RIDGE.svg'),
        text: '(click here to view rates to CHESTNUT RIDGE)',
        sheetName: '9. CHESTNUT RIDGE'
      },{
        title: 'PEARL RIVER',
        img: require('../assets/places/PEARL-RIVER.svg'),
        text: '(click here to view rates to PEARL RIVER)',
        sheetName: '10. PEARL RIVER'
      },{
        title: 'AIRPORTS',
        img: require('../assets/places/AIRPORTS.svg'),
        text: '(click here to view rates to AIRPORTS)',
        sheetName: '11. AIRPORTS'
      },{
        title: 'LONG DISTANCE',
        img: require('../assets/places/LONG-DISTANCE.svg'),
        text: '(click here to view rates to LONG DISTANCE)',
        sheetName: '12. LONG DISTANCE'
      },
    ],
    ratesUrl: require('../assets/icons/rates.svg'),
    dialog: false,
    citySelected: {}
  }),
  methods: {
    navigateCards(direction) {
      let d = document.getElementById("rates-content")
      let card = document.querySelectorAll(".card-custom")
      let scrollNumber = 910
      if(card.length != 0){
        scrollNumber = card[0].offsetWidth + 30
      }
      let scroll = {
        behavior: "smooth"
      }
      if(direction == 'prev'){
        scroll.left = d.scrollLeft - scrollNumber
      }else{
        scroll.left = d.scrollLeft + scrollNumber
      }
      d.scrollTo(scroll)
    },
    async openModal(ele){
      this.items = []
      this.loadingSheets = true
      this.dialog = true
      this.citySelected.name = ele.title
      try {
        let sheetData = await this.$axios.get(`${URLSHEETSGOOGLEAPI}/values/${ele.sheetName}?key=AIzaSyCtnep4IbNgDCr7WFuRAar7iqUfwP015F0`)
        if(!!sheetData.data){
          this.citySelected.data = sheetData.data.values
          this.items = sheetData.data.values.map(element => {
            let ele = {
              route: element[0],
              rate: element[1]
            }
            return ele
          })
        }
      } catch (error) {
        console.log("error", error)
      } finally {
        this.loadingSheets = false
      }
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
        img{
          margin-bottom: 16px;
          max-width: 100%;
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

@media (max-width: 1263px) {
  .rates{
    &-content{
      .card-custom{
        min-width: 500px;
        max-width: 500px;
        h2{
          font-size: 32px;
        }
        p{
          font-size: 16px;
        }
      }
    }
  }
}

@media (max-width: 959px) {
  .rates{
    &-content{
      .card-custom{
        min-width: 100%;
        max-width: 100%;
      }
    }
  }
}

@media (max-width: 700px) {
  .rates{
    gap: 8px;
    &-title{
        height: 80px;
        span{
            font-size: 48px;
        }
    }
    &-content{
      .card-custom{
        min-width: 100%;
        max-width: 100%;
      }
    }
  }
}
</style>