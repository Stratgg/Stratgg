<script>
  import facebook from '$lib/assets/images/footer-icons/facebook.svg';
  import twitter from '$lib/assets/images/footer-icons/twitter.svg';
  import instagram from '$lib/assets/images/footer-icons/instagram.svg';
  import youtube from '$lib/assets/images/footer-icons/youtube.svg'; 
</script>


<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded text-base ">
  <div class="grid grid-flow-col gap-4">
    <a class="link link-hover" href="/">Home</a>
    <a class="link link-hover" href="/Contact">Contact</a> 
    <a class="link link-hover" href="/FAQ">FAQ</a>
    <a class="link link-hover" href="/Terms">Terms of Use</a>
    <a class="link link-hover" href="/Privacy">Privacy Policy</a>
  </div> 
  <div>
    <div class="grid grid-flow-col gap-4">
      <a href="#">
        <img src= {twitter} alt="twitter" class="object-scale-down h-14" />
      </a>
      <a href="#">
        <img src= {instagram} alt="instagram" class="object-scale-down h-14" />
      </a>
      <a href="#">
        <img src= {facebook} alt="facebook" class="object-scale-down h-14"/>
      </a>
      <a href="#">
        <img src= {youtube} alt="youtube" class="object-scale-down h-14"/>
    </div>
  </div> 
  <div>
    <p>© 2023 StratGG LLC. All rights reserved.</p>
  </div>
</footer>