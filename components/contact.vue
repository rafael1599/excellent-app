<template>
  <div class="contact" id="contact">
    <v-img class="contact-logo" :src=contactUrl :alt="'img-contact'" />
    <div class="contact-content">
      <div class="contact-izq square-container">
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Last Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="Phone number"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            :error-messages="selectErrors"
            label="Item"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
          <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="Do you agree?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>

          <v-btn
            class="mr-4"
            @click="submit"
          >
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </form>

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

import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'contact',
  data: () => ({
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
}
</style>