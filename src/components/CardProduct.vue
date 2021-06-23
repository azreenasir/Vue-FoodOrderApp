<template>
  <div class="card shadow card-product">
    <img :src="'../images/' + product.image " class="card-img-top" alt="..."  />
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <p class="card-text">
        Price: RM{{product.price}}.00
      </p>
      <router-link :to="'/foods/'+product.id" class="btn btn-success">
        <b-icon-cart></b-icon-cart>
        Order
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"]
};
</script>

<style></style>
