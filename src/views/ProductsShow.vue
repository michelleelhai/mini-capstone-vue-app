<template>
  <div class="home">
    <h1>{{ product.name }}</h1>
    <h1>{{ product.description }}</h1>
    <h1>{{ product.price }}</h1>
    <router-link v-bind:to="`/product/${product.id}/edit`">Edit product</router-link>
    <router-link to="/">back to all products</router-link>
    <button v-on:click="destroyProduct(product)">delete</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      product: {}
    };
  },
  created: function() {
    axios
      .get("/api/products/" + this.$route.params.id)
      .then(response => {
        this.product = response.data;
      })
      .catch(error => {
        console.log(error.response.data.errors);
      });
  },
  methods: {
    destroyProduct: function(product) {
      axios.delete("/api/products/" + product.id).then(response => {
        this.$router.push("/products");
      });
    }
  }
};
</script>
