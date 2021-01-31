import {
  extend,
  localize,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
import { email, numeric, required } from 'vee-validate/dist/rules'
import Vue from 'vue'

extend('required', required)
extend('email', email)
extend('numeric', numeric)

localize('en', en)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
