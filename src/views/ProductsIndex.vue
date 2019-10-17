<template>
  <div class="products-index" list="names">
    Search by name:
    <input v-model="nameFilter" />
    <datalist id="names">
      <option v-for="product in products">{{ product.name }}</option>
    </datalist>
    <button>Sort Alphabetically</button>
    <div v-for="product in orderBy(filterBy(products, nameFilter, 'name'), 'name')">
      <h1>{{ product.name }}</h1>
      <h1>{{ product.price }}</h1>
      <p>{{ product.description }}</p>
      <router-link v-bind:to="`/products/${product.id}`">More details</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      products: [],
      nameFilter: ""
    };
  },
  created: function() {
    axios.get("/api/products").then(response => {
      this.products = response.data;
    });
  },
  methods: {}
};
</script>
