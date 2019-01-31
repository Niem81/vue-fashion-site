<template>
  <div class="container">
    <mainMenu>
      <btn btnColor="btn btn-small btn-info btn-popup">
         Cart
      </btn>
    </mainMenu>
    <transition name="leave">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import mainMenu from '@/components/Menu.vue';
import btn from '@/components/Btn.vue';

export default {
  components: {
    mainMenu,
    btn,
  },
  methods: {
    ...mapActions([
      'showOrHiddenPopupCart',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getPopupCart',
    ]),
  },
};

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
