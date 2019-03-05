<template lang="html">
  <div class="">
    <h1>Sign In</h1>
    <section class="login-form">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <p class="forgotPass">
        Forgot your password? Click <router-link to="/forgetPassword">here</router-link>!
      </p>
    </section>
    <section class="new-customer">
      <h2>New Customer?</h2>
      <p>
        Register to our awesome Le Vuetique to get great deals and find out latest trends on fashion , and why not buy them!
        <br/>
        <router-link to="/register"><span>Sign Up Here</span></router-link>
      </p>
    </section>
  </div>
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
