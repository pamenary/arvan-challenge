<template>
  <ValidationObserver
    ref="observer"
    v-slot="{ invalid, handleSubmit }"
    class="register-box"
  >
    <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
      <div class="title text-center">Register</div>

      <validation-provider
        v-slot="{ errors }"
        name="Username"
        :rules="{ required: true }"
      >
        <b-form-group
          label="Username"
          label-for="username"
          :invalid-feedback="errors[0]"
          :state="!errors.length"
        >
          <b-form-input id="user" v-model="form.username" name="username" />
        </b-form-group>
      </validation-provider>

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
        :rules="{ required: true, min: 8 }"
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
        :show="isLoading"
        rounded
        opacity="0.6"
        spinner-small
        spinner-variant="primary"
      >
        <b-button type="submit" variant="primary" block :disabled="invalid">
          Register
        </b-button>
      </b-overlay>
    </b-form>

    <div class="register-link">
      <span> Already Registered? </span>
      <nuxt-link class="ml-1" to="/login"> Login </nuxt-link>
    </div>
  </ValidationObserver>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        username: null,
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
.register-box {
  background-color: $silver-color;
  padding: 37px 20px 19px;
  border-radius: 4px;
  max-width: 450px;
  min-width: 310px;
  width: 100%;
  color: $warm-grey-color;
  font-size: 16px;
  .title {
    line-height: 1.19;
    font-size: 47px;
    margin-bottom: 49px;
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
