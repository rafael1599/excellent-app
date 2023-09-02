<template>
    <div class="services">
        <v-img class="img-services" :src="icons[0]" />
        <div class="services-content">
            <div class="serv-izq square-container">
                <v-img :src="icons[1]" />
                <h2>TAXI SERVICE</h2>
                <p>Experience Comfort & Convenience with our 4-Passenger Taxis! </p>
            </div>
            <div class="serv-der square-container">
                <v-img :src="icons[2]" />
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
        icons: [
            require('../assets/icons/services.svg'),
            require('../assets/icons/taxi-car.svg'),
            require('../assets/icons/taxi-van.svg'),
        ],

    }),
}
</script>
<style>
.img-services {
    max-width: 105%;
    width: 1860px;
    height: 153px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.services-content {
    width: 1860px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.square-container {
    text-align: center;
    width: 915px;
    height: 900px;
    border-radius: 10px;
    background-color: #C7C7C7;
}

.square-container p {
    margin-left: 94px;
    margin-right: 94px;
}

.serv-izq {
    margin-right: 30px;
}

.serv-der {
    background-color: #ffff;
}
</style>