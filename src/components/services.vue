<template>
    <div class="services" id="services">
        <div class="services-title">
            <span>Services</span>
        </div>
        <div class="services-content">
            <div class="card-custom services-content-left">
                <img :src="taxiCar" />
                <h2>TAXI SERVICE</h2>
                <p>Experience Comfort & Convenience with our 4-Passenger Taxis! </p>
            </div>
            <div class="card-custom services-content-right">
                <img :src="taxiVan" />
                <h2>MINIVAN</h2>
                <p>Discover our Spacious Minivans for Seamless Group Outings & Family Trips.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'services',
    data: () => ({
        model: 0,
        taxiCar: require('../assets/icons/taxi-car.svg'),
        taxiVan: require('../assets/icons/taxi-van.svg')
    }),
}
</script>
<style lang="scss">
.services{
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
        .card-custom{
            width: 50%;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 750px;
            img{
                max-height: 350px;
                margin-bottom: 33px;
            }
            h2{
                font-size: 68px;
                font-family: 'Inter';
                line-height: normal;
                margin-bottom: 25px;
            }
            p{
                font-size: 34px;
                font-family: 'Inter';
                max-width: 727px;
                text-align: center;
                line-height: normal;
            }
        }
        &-left{
            background-color: #C7C7C7;
            img{
                max-width: 426px;
            }
        }
        &-right{
            background-color: #FFFFFF;
            img{
                max-width: 426px;
            }
        }
    }
}
</style>