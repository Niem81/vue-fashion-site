<template>
  <div class="checkout-box">
    <ul class="checkout-list">
      <transition-group name="fade">
        <li v-for="(product, index) in getProductsInCart" :key="index" class="checkout-product">
           <img :src="product.image" alt="" class="product-image">
           <h3 class="product-name">{{ product.name }}</h3>
           <span class="product-price">R$ {{ product.price }},00 </span>
           <button class="product-remove" @click="remove(index)">X</button>
         </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="css">
</style>
