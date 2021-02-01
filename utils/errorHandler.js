import Vue from 'vue'

const errorHandler = (errors, typeError = 'danger') => {
  const vm = new Vue()
  if (typeof errors === 'object') {
    for (const key in errors) {
      vm.$bvToast.toast(errors[key], {
        title: key,
        variant: typeError,
        solid: true,
      })
    }
  } else {
    vm.$bvToast.toast(errors, {
      variant: typeError,
      solid: true,
    })
  }
}

export default errorHandler
