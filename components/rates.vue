
<template>
  <div class="rates">
    <div class="rates-title">
      <span>Rates</span>
    </div>
    <div class="rates-content">
      <div class="card-custom rates-content-left" v-for="p in places" :key="p">
          <img :src="p.img"/>
          <h2>{{p.title}}</h2>
          <p>{{p.text}}</p>
      </div>
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
      }
    ],
    ratesUrl: require('../assets/icons/rates.svg'),

  }),
}
</script>

<style lang="scss">
.rates{
    display: flex;
    flex-direction: column;
    gap: 30px;
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