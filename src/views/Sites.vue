<template>
    <div class="sites">
        <p class="siteHeader">Here are my sites:</p>
        <ul class="siteList">
            <li v-for="site in sites" :key="site.link" class="site">
                <a :href="site.link" target="_blank">{{ site.text }}</a>
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

        return{
            sites
        }
    }
}
</script>

<style>
.siteHeader{
    font-size: 32px;
    margin: 0 0 0 15px;
}

.site{
    margin-bottom: 5px;
}

.site > a{
    text-decoration: none;
    color: black;
    font-size: 22px;
}
</style>