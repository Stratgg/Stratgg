<!-- This error page is displayed when a page cannot not found -->

<script lang="ts">
 const takeHome = () => {
    window.location.href = "/";
  };
</script>

<div class="pageNotFoundContainer container">
  <h1 class="pageNotFoundHeading pageNotFoundHeading">Oops!</h1>
  <h3 class="pageNotFoundSubHeading pageNotFoundHeading">404 - Page Not Found</h3>
  <p class="pageNotFoundPara">Sorry this page could not be found. Please try again.</p>
  <!-- TODO possibly add an image or GIF -->
  <button class="pageNotFoundHomeBtn btn" on:click={takeHome}>Go To Homepage</button>
</div>