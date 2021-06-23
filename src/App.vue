<template>
  <div id="app">
    <router-view/>
    <Footer v-if="!$route.meta.hideFooter"/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {

  components: {
    Footer
  }
}
</script>

<style>

</style>
