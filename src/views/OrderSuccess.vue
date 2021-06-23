<template>
  <div class="order-success">
    <Navigation />
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col text-center">
                <img src="../assets/images/menunggu.png" width="300px">
                <h2><strong>Success!</strong></h2>
                <h4>Your Order has been process. <br> Please wait.</h4>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  components: {
    Navigation
  }
};
</script>

<style></style>
