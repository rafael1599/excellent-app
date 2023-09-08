<template>
  <div class="contact" id="contact">
    <div class="contact-title">
      <span>Contact</span>
    </div>
    <div class="contact-content">
      <div class="card-custom contact-content-left">
        <h2>Send us a message</h2>
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

import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: "contact",
  data: () => ({
<<<<<<< HEAD
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
    }
  }),
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
=======
    contactUrl: require('../assets/icons/contact.svg'),
    mapUrl: require('../assets/icons/map.svg'),
  }),
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      },
    },
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  },
}
</script>

<style>
.contact-logo {
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

.contact-izq {
  margin-right: 30px;
}

.contact-izq h2 {
  font-size: 82px;
}

.contact-der {
  font-size: 28px;
  color: #000;
}

.contact-der h2 {
  font-weight: bold;
}

.contact-der {
  background-color: #ffff;
>>>>>>> 631e1d47fa5a50ad70c1a6f8344beddc0ee7f30e
}
</style>