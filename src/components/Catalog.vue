<template>
  <div class="container">
    <ul class="wardrove">
      <li v-for="(product, index) in products" :key="index" class="clothes">
        <img :src="" alt="">
        <router-link to="/product-details">
          <h2 class="garment-name"
              @click="addGarmentToFavorite(product)">
            {{ product.name }}
          </h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">

</style>
