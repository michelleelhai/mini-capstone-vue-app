<template>
  <div class="home">
    <div>
      Name:
      <input type="text" v-model="newProductName" />
      Price:
      <input type="text" v-model="newProductPrice" />
      Description:
      <input type="text" v-model="newProductDescription" />
      Supplier:
      <input type="text" v-model="newSupplierId" />

      <button v-on:click="createProduct()">Create Product</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      products: [],
      newProductName: "",
      newProductPrice: "",
      newProductDesciption: "",
      newSupplierId: ""
    };
  },
  created: function() {
    axios.get("/api/products").then(response => {
      this.products = response.data;
    });
  },
  methods: {
    createProduct: function() {
      var params = {
        name: this.newProductName,
        price: this.newProductPrice,
        description: this.newProductDescription,
        supplier_id: this.newSupplierId
      };
      axios
        .post("/api/products", params)
        .then(response => {
          this.products.push(response.data);
          this.newProductName = "";
          this.newProductPrice = "";
          this.newProductDesciption = "";
          this.newSupplierId = "";
        })
        .catch(error => {
          console.log(error.response.data.errors);
        });
    }
  }
};
</script>
