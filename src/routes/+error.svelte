<!-- This error page is displayed when a page cannot not found -->

<script lang="ts">
 const takeHome = () => {
    window.location.href = "/";
  };
</script>

<div class="pageNotFoundContainer">
  <h1 class="pageNotFoundHeading">404: Page Not Found</h1>
  <p class="pageNotFoundPara">Sorry this page could not be found. Please try again.</p>
  <!-- TODO possibly add an image or GIF -->
  <button class="pageNotFoundHomeBtn" on:click={takeHome}>Go Home</button>
</div>