<script>
    export let relatedArtists;
    export let mainArtist;
</script>
<div id="card-group">
    {#if relatedArtists.length > 0}
        <div class="main-card flex flex-col justify-center items-center" style="background-image:url({mainArtist.images[1].url}); background-repeat: no-repeat;">
            <h1 class="text-lg text-spotifyGreen font-bold">{mainArtist.name}</h1>
            <a href="{mainArtist.external_urls.spotify}"><i class="fa-brands fa-spotify text-6xl text-spotifyGreen px-2" ></i></a>
        </div>
        {#each relatedArtists as artist}
        <div class="secondary-card flex flex-col justify-center items-center" style="background-image:url({artist.images[1].url}); background-repeat: no-repeat;">
            <h1 class="text-lg text-spotifyGreen font-bold">{artist.name}</h1>
            <a href="{artist.external_urls.spotify}"><i class="fa-brands fa-spotify text-6xl text-spotifyGreen px-2" ></i></a>
        </div>
        {/each}
    {:else}
        <img class="main-card" src="/s2logo.png" alt="Similar 2 logo">
    {/if}>
</div>

<style>
.main-card {
    position: absolute;
    width: 28vmin;
    aspect-ratio: 5/7;
    border-radius: 1vmin;
    font-weight: bold;
    transition: transform 800ms cubic-bezier(.05,.43,.25,.95);
}
.secondary-card {
    position: absolute;
    width: 23vmin;
    aspect-ratio: 5/7;
    border-radius: 1vmin;
    transition: transform 800ms cubic-bezier(.05,.43,.25,.95);
}
#card-group{
    background-color: '#232B2B';
    width: 50%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
/* LATERAL CARDS */
#card-group:hover > .secondary-card:nth-child(2){
    transform: translate(-120%, 5%)
}
#card-group:hover > .secondary-card:nth-child(3){
    transform: translate(120%,5%)
}

/* UP ROW */
#card-group:hover > .secondary-card:nth-child(4){
    transform: translate(130%,-100%) rotate(3deg)
}
#card-group:hover > .secondary-card:nth-child(5){
    transform: translate(35%,-100%) rotate(-2deg)
}
#card-group:hover > .secondary-card:nth-child(6){
    transform: translate(-60%,-100%) rotate(2deg)
}
#card-group:hover > .secondary-card:nth-child(7){
    transform: translate(-160%,-100%) rotate(-8deg)
}
/* DOWN ROW */
#card-group:hover > .secondary-card:nth-child(8){
    transform: translate(140%,100%) rotate(-3deg)
}
#card-group:hover > .secondary-card:nth-child(9){
    transform: translate(35%,115%) rotate(-2deg)
}
#card-group:hover > .secondary-card:nth-child(10){
    transform: translate(-60%,110%) rotate(-2deg)
}
#card-group:hover > .secondary-card:nth-child(11){
    transform: translate(-160%,110%) rotate(8deg)
}
/*.card:nth-child(3){
    background-color: white !important;
    transform: translateX(-10%) rotate(-1deg);
}

 .card:nth-child(4){
    background-color: white !important;
    transform: translateX(10%) rotate(2deg);
}
.card:nth-child(5){
    background-color: white !important;
    transform: translateX(-10%) rotate(-3deg);
}
.card:nth-child(6){
    background-color: white !important;
    transform: translateX(10%) rotate(4deg);
}
.card:nth-child(7){
    background-color: white !important;
    transform: translateX(-10%) rotate(-5deg);
}
.card:nth-child(8){
    background-color: white !important;
    transform: translateX(-10%) rotate(-5deg);
}
.card:nth-child(9){
    background-color: white !important;
    transform: translateX(-10%) rotate(-5deg);
}
.card:nth-child(10){
    background-color: white !important;
    transform: translateX(-10%) rotate(-5deg);
}
.card:nth-child(11){
    background-color: white !important;
    transform: translateX(-10%) rotate(-5deg);
} */
</style>