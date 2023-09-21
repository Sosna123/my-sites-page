<template>
    <nav class="nb">
        <a class="nb-text" href="/">Olek Arez</a>
        <a class="nb-link nb-link-first" href="/sites">My Sites</a>
        <a class="nb-link" href="/sites">My Sites</a>
        <a class="nb-link" href="/sites">My Sites</a>
    </nav>
</template>

<script>

</script>

<style>
.nb{
    display: flex;
    background: rgb(0, 90, 255);
    padding: 20px;
    margin: 0;
}

    /* nb-text */

.nb-text{
    text-decoration: none;
    color: white;
    font-size: 46px;
    margin: 0;
}

.nb-text:hover{
    color: rgb(200, 200, 200);
}

.nb-text:active{
    color: rgb(150, 150, 150);
}

    /* nb-link */

.nb-link{
    text-decoration: none;
    color: white;
    font-size: 32px;
    margin: 0 5px;
    align-self: center;
}

.nb-link-first{
    margin-left: auto;
}

.nb-link:hover{
    color: rgb(200, 200, 200);
}

.nb-link:active{
    color: rgb(150, 150, 150);
}
</style>