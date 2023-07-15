<!-- This error page is displayed when a page cannot not found -->

<script lang="ts">
 const takeHome = () => {
    window.location.href = "/";
  };
</script>

<div id="pageNotFoundFlexContaier" class="text-center border-solid border-2 border-red-500"  >
  <div id="pageNotFoundContainer" class="">
    <h1 id="pageNotFoundHeading " class="text-9xl">Oops!</h1>
    <h3 id="pageNotFoundSubHeading" class="text-5xl">404 - Page Not Found</h3>
    <p id="pageNotFoundPara" class="text-3xl">Sorry this page could not be found. Please try again.</p>
    <!-- TODO possibly add an image or GIF -->
    <button id="pageNotFoundHomeBtn" class="bg-coolBlue"   on:click={takeHome}>Go To Homepage</button>
  </div>
</div>


