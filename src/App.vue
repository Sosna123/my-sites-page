<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './views/Navbar.vue'
export default {
    components: {
        Navbar
    },
    setup() {

    }
}
</script>

<style>

</style>
