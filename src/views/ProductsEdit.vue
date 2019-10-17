<template>
  <div class="home">
    Name:
    <input type="text" v-model="product.name" />
    Price:
    <input type="text" v-model="product.rice" />
    Description:
    <input type="text" v-model="product.description" />
    Supplier:
    <input type="text" v-model="product.supplierid" />

    <button v-on:click="updateProduct()">Update Product</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      product: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/products" + this.$route.params.id).then(response => {
      this.product = response.data;
    });
  },
  methods: {
    updateProduct: function(product) {
      var params = {
        Name: product.name,
        price: product.price,
        description: product.description,
        supplier_id: product.supplier_id
      };
      axios
        .patch("/api/products/" + product.id, params)
        .then(response => {
          this.$router.push("/products");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
