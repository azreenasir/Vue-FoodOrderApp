<template>
  <!-- Desktop -->
  <div class="hero">
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu,</strong> <br />In Your Gadget
              </h2>
              <p>Come choose and order your favourite food.</p>
              <button class="btn btn-lg btn-success">
                <b-icon-arrow-right-circle scale="0.9" class="mr-2">
                </b-icon-arrow-right-circle>
                <router-link to="order">Order</router-link>
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <div class="col">
            <img src="../assets/images/hero.png" width="100%" />
          </div>
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu,</strong> <br />In Your Gadget
              </h2>
              <p>Come choose and order your favourite food.</p>
              <button class="btn btn-lg btn-success">
                <b-icon-arrow-right-circle scale="0.9" class="mr-2">
                </b-icon-arrow-right-circle>
                <router-link to="order">Order</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
button a,
button a:hover {
  text-decoration: none;
  color: white;
}
</style>
