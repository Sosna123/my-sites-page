<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3 mb-4">
        <router-link class="navbar-brand me-3 fs-1 fw-light" to="/">Olek Arez</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link fs-3 fw-light" 
                    :class="{active: checkRoute('Sites')}" to="/sites">My Sites</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import {useRoute} from 'vue-router'

export default{
    setup(){

        function checkRoute(name){
            const route = useRoute()
            const currentRouteName = route.name;

            if(currentRouteName == name){
                return true;
            }
            return false;
        }
        
        return {
            checkRoute
        }
    }
}
</script>

<style>

</style>