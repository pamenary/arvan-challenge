import errorHandler from '@/utils/errorHandler'
import Vue from 'vue'

export default function (context) {
  context.$axios.setHeader('Content-Type', 'application/json')

  context.$axios.onError((error) => {
    const vm = new Vue()
    const code = parseInt(error.response && error.response.status)

    if (code === 401) {
      vm.$logout()
      context.redirect('/login')
    }

    errorHandler(error.response.data.errors)
  })
}
