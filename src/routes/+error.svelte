<svelte:head>
  <title>Page Not Found</title>
</svelte:head>

<script lang="ts">
 const takeHome = () => {
    window.location.href = "/";
  };  
</script>

<div id="pageNotFoundFlexContaier" class="text-center text-white h-screen flex flex-col items-center justify-center"  >
    <h1 id="pageNotFoundHeading " class="text-9xl mb-5  " >Oops!</h1>
    <h3 id="pageNotFoundSubHeading" class="text-5xl">404 - Page Not Found</h3>
    <p id="pageNotFoundPara" class="text-3xl">Sorry this page could not be found. Please try again.</p>
    <!-- TODO possibly add an image or GIF -->
    <button id="pageNotFoundHomeBtn" class="btn-neutral rounded-lg text-xl px-2 py-0.5 m-2 text-white" on:click={takeHome}>Go To Homepage</button>
</div>
