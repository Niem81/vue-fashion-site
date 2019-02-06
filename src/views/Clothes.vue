<template lang="html">
  <div class="clothes-sample">
    <ul class="clothes-list">
      <transition-group name="fade">
        <li v-for="(product, index) in getProductsInCart" :key="index" class="checkout-product">
           <img :src="product.image" alt="" class="product-image">
           <h3 class="product-name">{{ product.name }}</h3>
           <span class="product-price">R$ {{ product.price }},00 </span>
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
