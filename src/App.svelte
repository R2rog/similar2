<script>
  import { onMount } from "svelte";
  import Card from "./lib/Card.svelte"

  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
  const authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  };
  let accessToken;
  let mainArtist = '';
  let relatedArtists = [];
  let artistJSON = {};

  onMount(async ()=>{
    accessToken = await fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((res)=>res.json())
      .then((data)=>{return data.access_token})
      .catch((error)=>{
        alert(error.message);
      })
  });

  async function search() {
    //GET request to get the Artist ID.
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    artistJSON = await fetch(
      `https:/api.spotify.com/v1/search?q=${mainArtist}&type=artist`,
      searchParameters
    )
      .then((res)=>res.json())
      .then((data)=>{return data.artists.items[0]})
      .catch(error => alert(error.message));

    //GET request with Artist ID grab all the shows from the artist.
    relatedArtists = await fetch(
      `https://api.spotify.com/v1/artists/${artistJSON.id}/related-artists`,
      searchParameters
    )
      .then((res) => res.json())
      .then((data) => {
        return data.artists.slice(0,10);
      })
      .catch(error => alert(error.message));
  }
</script>

<main>
  <div class="flex flex-col items-center w-full">
    <h1 class="text-6xl my-5 font-bold text-white">SIMILAR 2 <span class="text-white text-sm">powered by <i class="fa-brands fa-spotify text-sm text-spotifyGreen px-2"></i></span></h1>
    <p class="text-white text-3xl">Type an artist and get 10 similar ones to your search.</p>
  </div>
  <div class="flex flex-col items-center justify-center w-full mx-10 my-10 md:flex-row">
    <input type="text" name="artist" id="artist-search" bind:value={mainArtist} />
    <button on:click={search} class="rounded-full mx-4 w-1/6 text-lg text-black bg-spotifyGreen"
      >Search</button
    >
  </div>
  <Card bind:mainArtist={artistJSON} bind:relatedArtists={relatedArtists}>

  </Card>
</main>

<style>
  input[type=text] {
  width: 50%;
  padding: 12px 20px;
  margin: 4px 0;
  box-sizing: border-box;
  font-size: 1.5rem;
}
</style>
