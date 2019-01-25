<template>
  <div class="container">
    <mainMenu>
      <btn btnColor="btn btn-small btn-info btn-popup"
         :cartIcon="true"
         @click.native="showPopupCart()">
         Cart
        <span class="btn-circle" v-if="hasProduct()">
           {{ getProductsInCart.length }}
        </span>
      </btn>
      <transition name="appear">
        <popupcart class="cart" v-if="getPopupCart"/>
      </transition>
    </mainMenu>
    <transition name="leave">
      <router-view></router-view>
    </transition>
    <maskBg v-if="getPopupCart" @click.native="showPopupCart()"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import mainMenu from './components/Menu';
import btn from './components/Btn';
import popupcart from './components/Popupcart';
import maskBg from './components/Mask';

export default {
    components: {
      mainMenu,
      btn,
      popupcart,
      maskBg
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
      }
    },
    computed: {
      ...mapGetters([
        'getProductsInCart',
        'getPopupCart'
      ])
    }
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
