<template>
  <div class="contact" id="contact">
    <div class="contact-title">
      <span>Contact</span>
    </div>
    <div class="contact-content">
      <div class="card-custom contact-content-left">
        <h2>Send us a message</h2>
        <v-form v-model="validForm" ref="form">
          <v-row class="m-0">
            <v-col
              class="py-0"
              cols="12"
              lg="6">
              <v-text-field
                v-model="formContact.firstName"
                :rules="rules.firstName"
                label="First Name"
                height="55"
                rounded
                solo
              ></v-text-field>
            </v-col>
            <v-col
              class="py-0"
              cols="12"
              lg="6">
              <v-text-field
                v-model="formContact.lastName"
                :rules="rules.lastName"
                label="Last Name"
                height="55"
                rounded
                solo
              ></v-text-field>
            </v-col>
            <v-col
              class="py-0"
              cols="12"
              lg="6">
              <v-text-field
                v-model="formContact.email"
                :rules="rules.email"
                label="E-mail"
                height="55"
                rounded
                solo
              ></v-text-field>
            </v-col>
            <v-col
              class="py-0"
              cols="12"
              lg="6">
              <v-text-field
                v-model="formContact.phone"
                :rules="rules.phone"
                label="Phone number"
                height="55"
                rounded
                solo
              ></v-text-field>
            </v-col>
            <v-col
              class="pt-0"
              cols="12">
              <v-textarea
                v-model="formContact.message"
                :rules="rules.message"
                label="Message"
                rounded
                solo
              ></v-textarea>
            </v-col>
          </v-row>
          <div class="d-flex justify-end">
            <v-btn
              color="#FFC736"
              @click="sendMessage()"
              width="150"
              height="60"
              rounded
              :loading="loading"
              :disabled="!validForm || loading">
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
          :options="{
            fullscreenControl: false,
            mapTypeId: 'satellite'
          }"
          :zoom="19">
          <GMapMarker
              :position="{lat: location.latitude, lng: location.longitude}"
              :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
              @click="currentLocation = location">
              <GMapInfoWindow :options="{maxWidth: 200}">
                <h3><b>Excellent Taxi</b></h3>
                <br>
                <span>300 North Main St, Spring Valley, NY 10977.</span>
              </GMapInfoWindow>
          </GMapMarker>
        </GMap>
        <div class="contact-content-right-text-address">
          <span class="contact-content-right-text-address-title">ADDRESS</span>
          <span>300 North Main St, Spring Valley, NY 10977</span>
          <span class="contact-content-right-text-address-title">HOURS</span>
          <span>24 hours Mon-Sun</span>
          <span class="contact-content-right-text-address-title">EMAIL</span>
          <span>
            <a href="mailto:exellenttaxi2023@gmail.com">exellenttaxi2023@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var querystring = require('querystring')
export default {
  name: "contact",
  data: () => ({
    contactUrl: require("@/assets/icons/contact.svg"),
    mapUrl: require("@/assets/icons/map.svg"),
    currentLocation: '',
    location: {
      latitude: 41.128640,
      longitude: -74.040564
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
        v => (!!v && v.length == 10) || 'Phone must be valid',
      ],
      message: [
        v => !!v || 'Message is required', 
      ]
    },
    loading: false
  }),
  methods: {
    async sendMessage(){
      this.loading = true
      try {
        let res = await this.$axios.post(`/api/excellent-api/sendEmail`, querystring.stringify(this.formContact),
          {headers: {'content-type': 'application/x-www-form-urlencoded'}})
        if(res.data.success){
          alert("We've got your message, well be contacting you soon!")
          this.$refs.form.reset()
        }
      } catch (error) {
        console.log("error", error)
      } finally {
        this.loading = false
      }
    }
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

@media (max-width: 1263px) {
  .contact{
    &-content {
      .card-custom{
        h2{
          font-size: 32px;
        }
      }
      &-left{
        padding: 48px;
      }
    }
  }
}

@media (max-width: 959px) {
  .contact{
    &-content {
      flex-direction: column;
      .card-custom{
        width: 100%;
      }
    }
  }
}

@media (max-width: 700px) {
  .contact{
    gap: 8px;
    &-title{
        height: 80px;
        span{
            font-size: 48px;
        }
    }
    &-content {
      gap: 8px;
      &-right{
        &-text-address{
          padding: 32px 32px;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .contact{
    &-content {
      &-left{
        padding: 24px;
      }
      &-right{
        &-text-address{
          font-size: 22px;
        }
      }
    }
  }
}
</style>
