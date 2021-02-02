import errorHandler from '@/utils/errorHandler'

export default function (context) {
  if (process.browser) {
    context.$axios.setHeader('Content-Type', 'application/json')

    context.$axios.onError(async (error) => {
      const code = parseInt(error.response && error.response.status)

      if (code === 401) {
        await context.store.dispatch('auth/logout')
        context.redirect('/login')
      }

      errorHandler(error.response.data.errors)
    })
  }
}
