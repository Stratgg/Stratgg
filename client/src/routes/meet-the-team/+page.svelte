<svelte:head>
  <title>StratGG / The Team</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<script>
import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";
import Nav from "$lib/components/Nav.svelte";
import Footer from "$lib/components/Footer.svelte";
import marshall from "$lib/assets/images/stratgg-team-avatars/schooly.jpg";
import jasmine from "$lib/assets/images/stratgg-team-avatars/jazz.jpg";
import basic from "$lib/assets/images/stratgg-team-avatars/default.svg";
</script>

<Nav/>
<div id="teamContainer" class="flex flex-row text-center justify-between">
  <div id="thayerContainer">
    <div class="avatar" id="thayerAvatar">
      <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={basic}/>
      </div>
    </div>
    <div id="thayerBio" class="text-center">
    <h1>Thayer Weaver III</h1>
    <h1>Founder</h1>
    <p>Stardew Valley</p>
    </div>
  </div>
   
  <div id="kolebeContainer">
    <div class="avatar" id="kolebeAvatar">
      <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={basic}/>
      </div>
    </div>
    <div id="kolebeBio" class="text-center">
    <h1>Kolebe Shanks</h1>
    <h1>Co-Founder • UI/UX Designer • Developer  </h1>
    <p>Stardew Valley</p>
    </div>
  </div>

  <div id="marshallContainer">
    <div class="avatar" id="marshallAvatar">
      <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={marshall}/>
      </div>
    </div>
    <div id="marshallBio" class="text-center">
    <h1>Marshall Burns</h1>
    <h1>Lead Developer</h1>
    <p>Overwatch • Valorant</p>
    </div>
  </div>
  
  <div id="lacyContainer">
    <div class="avatar" id="lacyAvatar">
      <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={basic}/>
      </div>
    </div>
    <div id="lacyBio" class="text-center">
    <h1>Lacy Randolph</h1>
    <h1>Developer • Tester</h1>
    <p>Stardew Valley </p>
    </div>
  </div>
  
  <div id="jasmineContainer">
    <div class="avatar" id="jasmineAvatar">
      <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={jasmine}/>
      </div>
    </div>
    <div id="jasmineBio" class="text-center">
    <h1>Jasmine Zanders</h1>
    <h1>Developer</h1>
    <p>Sims 4 • Animal Crossing</p>
    </div>
  </div>
</div>
  
<Footer/>