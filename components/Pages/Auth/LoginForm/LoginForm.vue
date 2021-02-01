<template>
  <ValidationObserver
    ref="observer"
    v-slot="{ invalid, handleSubmit }"
    class="login-box"
  >
    <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
      <div class="title text-center">LOGIN</div>

      <validation-provider
        v-slot="{ errors }"
        name="Email"
        :rules="{ required: true, email: true }"
      >
        <b-form-group
          label="Email"
          label-for="email"
          :invalid-feedback="errors[0]"
          :state="!errors.length"
        >
          <b-form-input
            id="email"
            v-model="form.email"
            name="email"
            type="email"
            inputmode="email"
          />
        </b-form-group>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Password"
        :rules="{ required: true }"
      >
        <b-form-group
          label="Password"
          label-for="password"
          :invalid-feedback="errors[0]"
          :state="!errors.length"
        >
          <b-form-input
            id="password"
            v-model="form.password"
            name="password"
            type="password"
          />
        </b-form-group>
      </validation-provider>

      <b-overlay
        :show="loading"
        rounded
        opacity="0.6"
        spinner-small
        spinner-variant="primary"
      >
        <b-button type="submit" variant="primary" block :disabled="invalid">
          Login
        </b-button>
      </b-overlay>
    </b-form>

    <div class="register-link">
      <span> Don’t have account? </span>
      <nuxt-link class="ml-1" to="/register"> Register Now </nuxt-link>
    </div>
  </ValidationObserver>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.form)
    },
  },
}
</script>

<style lang="scss" scoped>
.login-box {
  background-color: $silver-color;
  padding: 37px 20px 19px;
  border-radius: 4px;
  max-width: 450px;
  min-width: 310px;
  width: 100%;
  color: $warm-grey-color;
  font-size: 16px;
  .title {
    font-size: 47px;
    margin-bottom: 27px;
  }
  .register-link {
    margin-top: 14px;
    a {
      color: $charcoal-grey-color;
      font-weight: bold;
    }
  }
}
</style>
