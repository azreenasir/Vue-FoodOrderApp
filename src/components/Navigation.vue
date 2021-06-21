<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="#">Food Order</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link exact :to="{ name: 'Home'}" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Foods'}">Foods</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link :to="{ name: 'Cart'}" class="nav-link">
                            Cart
                            <b-icon-bag></b-icon-bag>
                            <span class="badge badge-success ml-2">0</span>
                        </router-link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>