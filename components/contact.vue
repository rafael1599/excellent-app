<template>
  <div class="contact" id="contact">
    <div class="contact-title">
      <span>Contact</span>
    </div>
    <div class="contact-content">
      <div class="card-custom contact-content-left">
        <h2>Send us a message</h2>
        <v-form v-model="validForm">
          <div class="row m-0">
            <div class="col-6 py-0">
              <v-text-field
                v-model="formContact.firstName"
                :rules="rules.firstName"
                label="First Name"
                height="55"
                rounded
                solo
              ></v-text-field>
            </div>
            <div class="col-6 py-0">
              <v-text-field
                v-model="formContact.lastName"
                :rules="rules.lastName"
                label="Last Name"
                height="55"
                rounded
                solo
              ></v-text-field>
            </div>
            <div class="col-6 py-0">
              <v-text-field
                v-model="formContact.email"
                :rules="rules.email"
                label="E-mail"
                height="55"
                rounded
                solo
              ></v-text-field>
            </div>
            <div class="col-6 py-0">
              <v-text-field
                v-model="formContact.phone"
                :rules="rules.phone"
                label="Phone number"
                height="55"
                rounded
                solo
              ></v-text-field>
            </div>
            <div class="col-12 pt-0">
              <v-textarea
                v-model="formContact.message"
                :rules="rules.message"
                label="Message"
                rounded
                solo
              ></v-textarea>
            </div>
          </div>
          <div class="d-flex justify-end">
            <v-btn
              color="#FFC736"
              @click="sendMessage()"
              width="150"
              height="60"
              rounded
              :disabled="!validForm">
              Send
            </v-btn>            
          </div>
        </v-form>
      </div>
      <div class="card-custom contact-content-right">
        <GMap
          ref="gMap"
          language="en"
          :center="{lat: location.latitude, lng: location.longitude}"
          :options="{fullscreenControl: false}"
          :zoom="16">
          <GMapMarker
              :position="{lat: location.latitude, lng: location.longitude}"
              :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
              @click="currentLocation = location">
              <GMapInfoWindow :options="{maxWidth: 200}">
                <h3><b>Excellent Taxi</b></h3>
                <br>
                <span>300 North Main St, Spring Valley, NY, 10977, United States.</span>
              </GMapInfoWindow>
          </GMapMarker>
        </GMap>
        <div class="contact-content-right-text-address">
          <span class="contact-content-right-text-address-title">ADDRESS</span>
          <span>300 North Main St, Spring Valley, NY, 10977, United States.</span>
          <span class="contact-content-right-text-address-title">HOURS</span>
          <span>24 hours Mon-Sun</span>
          <span class="contact-content-right-text-address-title">EMAIL</span>
          <span>
            <a href="mailto:exelenttaxi2023@gmail.com">exelenttaxi2023@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const URLSHEETSGOOGLEAPI = 'https://sheets.googleapis.com/v4/spreadsheets/1o7GdrkD50Wk_WB2Gm1t94vW7RSA3ROh_GH0z8yUc9Uc'
export default {
  name: "contact",
  data: () => ({
    contactUrl: require("../assets/icons/contact.svg"),
    mapUrl: require("../assets/icons/map.svg"),
    currentLocation: '',
    location: {
      latitude: 41.1284729,
      longitude: -74.0408581
    },
    pins: {
      selected: '',
      notSelected: ''
    },
    validForm: false,
    formContact: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    },
    rules: {
      firstName: [
        v => !!v || 'First Name is required',
      ],
      lastName: [
        v => !!v || 'Last Name is required',
      ],
      email: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      phone: [
        v => !!v || 'Phone is required',
        v => v.length == 10 || 'Phone must be valid',
      ],
      message: [
        v => !!v || 'Message is required', 
      ]
    }
  }),
  methods: {
    async sendMessage(){
      // await this.$axios.post(`${URLSHEETSGOOGLEAPI}/values/'Hoja 1'!A1:E1:append?key=AIzaSyCtnep4IbNgDCr7WFuRAar7iqUfwP015F0`, {
      //   values: [
      //     [
      //       this.formContact.firstName,
      //       this.formContact.lastName,
      //       this.formContact.email,
      //       this.formContact.phone,
      //       this.formContact.message
      //     ]
      //   ]
      // })
      // this.formContact = {
      //   firstName: '',
      //   lastName: '',
      //   email: '',
      //   phone: '',
      //   message: ''
      // }
    }
  },
  async mounted(){
    // let book = await this.$axios.get(`${URLSHEETSGOOGLEAPI}?key=AIzaSyCtnep4IbNgDCr7WFuRAar7iqUfwP015F0`)
    // if(!!book.data){
    //   if(book.data.sheets.length != 0){
    //     let sheetTitle = book.data.sheets[0].properties.title
    //     let sheetData = await this.$axios.get(`${URLSHEETSGOOGLEAPI}/values/${sheetTitle}?key=AIzaSyCtnep4IbNgDCr7WFuRAar7iqUfwP015F0`)
    //     if(!!sheetData.data){
    //       console.log("values", sheetData.data.values)
    //       console.log("sheetData.data", sheetData.data)
    //     }
    //   }
    // }
  }
};
</script>

<style lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  &-title {
    background-color: #ffc738cc;
    border-radius: 10px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-family: "Nerko One";
      font-size: 82px;
    }
  }
  &-content {
    display: flex;
    gap: 30px;
    .card-custom {
      width: 50%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: 750px;
      img {
        max-height: 350px;
        margin-bottom: 33px;
      }
      h2 {
        font-size: 68px;
        font-family: "Inter";
        line-height: normal;
        margin-bottom: 25px;
      }
      p {
        font-size: 34px;
        font-family: "Inter";
        max-width: 727px;
        text-align: center;
        line-height: normal;
      }
    }
    &-left {
      background-color: #c7c7c7;
      padding: 0px 70px;
      justify-content: center !important;
      h2{
        margin-bottom: 48px !important;
        text-align: center;
      }
      .v-btn{
        text-transform: capitalize;
        font-size: 18px;
      }
    }
    &-right {
      background-color: #ffffff;
      .GMap{
        width: 100%;
        border-radius: 10px 10px 0px 0px;
        overflow: hidden;
        .GMap__Wrapper{
          height: 320px;
        }
      }
      &-text-address{
        padding: 48px 69px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-family: 'Inter';
        font-weight: 500;
        font-size: 28px;
        &-title{
          font-weight: bold;
        }
      }
    }
  }
}
</style>