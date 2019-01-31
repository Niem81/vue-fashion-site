<template lang="html">
  <div class="container-fluid">
    <div class="search-wrapper">
      <form v-on:submit="getFilteredProduct">
        <div class="form-row">
          <div class="col-10">
            <input type="text" class="form-control" placeholder="Enter key word  ..." v-model="search" v-on:keyup="getFilteredProduct">
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
     return {
       filteredData: [],
       search: '',
     };
  },
  methods: {
    getFilteredProduct: function() {
      this.filteredData = data;
      let filteredDataBySearch = [];
      // then filter according to keyword, for now this only affects the name attribute of each data
      if (this.search !== '') {
        filteredDataBySearch = this.filteredData.filter(obj => obj.name.indexOf(this.search.toLowerCase()) >= 0);
        this.filteredData = filteredDataBySearch;
      }
    },
  },
  mounted() {
    this.getFilteredProduct();
  },
};
</script>

<style lang="css">
</style>
