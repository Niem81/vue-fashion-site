<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <router-link to="/">Home</router-link>
        </li>
        <li class="link">
          <router-link to="/about">About</router-link>
        </li>
        <li class="link">
          <router-link to="/clothes">Clothes</router-link>
        </li>
        <li class="link">
          <searchBar></searchBar>
        </li>
        <li class="link">
          <router-link to="/login">Sign In</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import searchBar from './SearchBar.vue';

export default {
  components: {
    searchBar,
  },
};
</script>

<style scoped>
  .header {
    width: 100%;
    height: 70px;
    background-color: #333333;
    box-sizing: border-box;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav {
    width: 600px;
  }
  .nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  .link {
    list-style: none;
    padding: 0 2em;
  }
  .link a {
    color: #fff;
    text-decoration: none;
  }
</style>
