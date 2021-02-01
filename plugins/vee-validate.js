import {
  extend,
  localize,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
import { email, min, required } from 'vee-validate/dist/rules'
import Vue from 'vue'

extend('required', required)
extend('email', email)
extend('min', min)

localize('en', en)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
