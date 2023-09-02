<template>
    <div class="contact">
    <v-img class="contact-logo" :src=contactUrl :alt="'img-contact'"/>
      <div class="contact-content">
        <div class="contact-izq square-container">
                <h2>Send us a message</h2>
                
            </div>
            <div class="contact-der square-container">
                <v-img :src="mapUrl" />
                <h2>ADDRESS</h2>
                <p>300 North Main St, Spring Valley, NY, 10977, United States.</p>
                <h2>HOURS</h2>
                <p>24 hours Mon-Sun</p>
                <h2>EMAIL</h2>
                <p><a href="mailto:exelenttaxi2023@gmail.com">exelenttaxi2023@gmail.com</a></p>
            </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'contact',
  data: () => ({
  contactUrl: require('../assets/icons/contact.svg'),
  mapUrl:require('../assets/icons/map.svg'),
  }),
}
</script>

<style>
.contact-logo{
  max-width: 105%;
  width: 1860px;
  margin-bottom: 30px;
}
.contact-content {
    width: 1860px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.contact-izq{
  margin-right: 30px;
}

.contact-izq h2{
  font-size: 82px;
}

.contact-der{
  font-size: 28px;
  color: #000;
}
.contact-der h2{
  font-weight: bold;
}
.contact-der{
  background-color: #ffff;
}
</style>