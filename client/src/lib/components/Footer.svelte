<script>	
  import facebook from '$lib/assets/images/footer-icons/facebook.svg';	
  import twitter from '$lib/assets/images/footer-icons/twitter.svg';	
  import instagram from '$lib/assets/images/footer-icons/instagram.svg';	
  import youtube from '$lib/assets/images/footer-icons/youtube.svg'; 	
  import footerLogo from '$lib/assets/images/footer-icons/footer-logo.png';
</script>	


<footer class="footer items-center p-4 bg-neutral text-neutral-content">
  <div class="items-center grid-flow-col"> 
    <a href="/">
      <img src= {footerLogo} alt="footerLogo" class="h-24"/>
    </a>
    <div class="flex flex-col">
      <div id="otherlinks" class="flex flex-row">
        <a class="mb-4 mr-3" href="/our_team">Our Team</a>
        <a class="mb-4 mr-3" href="/faq">FAQ</a>
        <a class="mb-4" href="/contact">Contact Us</a>
      </div>
      <p>© 2023 StratGG LLC. All rights reserved.</p>	

    </div>
  </div> 
  <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
      </a>
    </div> 
  </div>
</footer>