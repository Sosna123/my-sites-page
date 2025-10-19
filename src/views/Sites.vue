<template>
    <div class="container-fluid p-2 ms-4">
        <p class="display-6">My Sites:</p>
        <ul class="list-group list-group-flush">
            <li v-for="site in sites" :key="site.link" class="list-group-item">
                <a
                    :href="site.link"
                    target="_blank"
                    class="lead text-reset text-decoration-none fs-3"
                    >{{ site.text }}</a
                >
            </li>
        </ul>

        <p class="display-6 mt-4">Other things:</p>
        <ul class="list-group list-group-flush">
            <li
                v-for="site in otherLinks"
                :key="site.link"
                class="list-group-item">
                <a
                    :href="site.link"
                    target="_blank"
                    class="lead text-reset text-decoration-none fs-3"
                    >{{ site.text }}</a
                >
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    setup() {
        // exapmle object
        // {link: "https://notatki-db.netlify.app", text: "Notes site"}
        const sites = [
            {
                link: "https://sosna123.github.io/Cat-Facts-API/",
                text: "Cat facts",
            },
            {
                link: "https://sosna123.github.io/Weather-API/",
                text: "Weather site",
            },
            {
                link: "https://sosna-pokedex.netlify.app/",
                text: "Pokedex site",
            },
            { link: "https://notatki-db.netlify.app/#/", text: "Notes site" },
            {
                link: "https://sosna-home-page.netlify.app/#/",
                text: "The site you're on right now",
            },
            {
                link: "https://wca-info.netlify.app/#/",
                text: "Site that gives information about WCA competitions and competitors (Not finished, i'll maybe finish it in the future)",
            },
            {
                link: "https://speedcubing-timer.netlify.app/#/",
                text: "A timer for solving a rubiks cube (Its still in the making)",
            },
            {
                link: "https://sosna-fretboardmemorizer.netlify.app/",
                text: "Fretboard memorizer",
            },
            {
                link: "https://sosna-customtests.netlify.app/",
                text: "Question asker???",
            },
        ];

        const otherLinks = [
            { link: "https://sosnowy123.itch.io/", text: "My itch.io page" },
            { link: "https://github.com/Sosna123", text: "My Github" },
            {
                link: "https://www.worldcubeassociation.org/persons/2022AREZ01",
                text: "My WCA account",
            },
        ];

        return {
            sites,
            otherLinks,
        };
    },
};
</script>

<style></style>
