<template>
    <div class="container-fluid p-2 ms-4">
        <p class="display-6">Here are my sites:</p>
        <ul class="list-group list-group-flush">
            <li v-for="site in sites" :key="site.link" class="list-group-item">
                <a :href="site.link" target="_blank" class="lead text-reset text-decoration-none fs-3">{{ site.text }}</a>
            </li>
        </ul>
        
        <p class="display-6 mt-4">Other things:</p>
        <ul class="list-group list-group-flush">
            <li v-for="site in otherLinks" :key="site.link" class="list-group-item">
                <a :href="site.link" target="_blank"  class="lead text-reset text-decoration-none fs-3">{{ site.text }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    setup(){
        // exapmle object
        // {link: "https://notatki-db.netlify.app", text: "Notes site"}
        const sites = [
            {link: "https://sosna123.github.io/Cat-Facts-API/", text: "Cat facts"},
            {link: "https://sosna123.github.io/Weather-API/", text: "Weather site"},
            {link: "https://sosna-pokedex.netlify.app/", text: "Pokedex site"},
            {link: "https://notatki-db.netlify.app/#/", text: "Notes site"},
            {link: "https://sosna-home-page.netlify.app/#/", text: "The site you're on right now"}
        ]

        const otherLinks = [
            {link: "https://sosnowy123.itch.io/", text: "My itch.io page"}
        ]

        return{
            sites, otherLinks
        }
    }
}
</script>

<style>

</style>