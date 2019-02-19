<template lang="html">
  <h1>Sign In</h1>
  <section class="login-form">
    <form class="" method="post">

    </form>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "login",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    ...mapGetters('auth', [
      'authenticating',
      'authenticationError',
      'authenticationErrorCode',
    ])
  },

  method: {
    ...mapActions('auth',[
      'login'
    ]),
    handleSubmit() {
      if (this.email && this.password) {
        this.login({email: this.email, password: this.password});
        this.password = "";
      }
    }
  }
};
</script>

<style lang="css" scoped>
</style>
