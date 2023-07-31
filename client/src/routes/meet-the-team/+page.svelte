<svelte:head>
  <title>StratGG / The Team</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<script>
import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";
import Nav from "$lib/components/Nav.svelte";
import Footer from "$lib/components/Footer.svelte";
import schooly from "$lib/assets/images/stratgg-team-avatars/schooly.jpg";
</script>

<Nav/>
<div id="teamContainer" class="flex flex-col text-center" >
  <div id="marshallContainer">
    <div class="avatar" id="schoolyAvatar">
      <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={schooly}/>
      </div>
    </div>
    <div id="marshallBio" class="text-center">
    <h1>Marshall Burns</h1>
    <h1>Developer</h1>
    <p>Overwatch • Minecraft • Valorant</p>
    </div>
  </div>  
</div>
  
<Footer/>
t