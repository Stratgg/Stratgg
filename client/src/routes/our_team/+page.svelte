<svelte:head>
  <title>StratGG / Our Team</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<script>
import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";
import Nav from "$lib/components/Nav.svelte";
import Footer from "$lib/components/Footer.svelte";
import marshall from "$lib/assets/images/stratgg-team-avatars/schooly.jpg";
import jasmine from "$lib/assets/images/stratgg-team-avatars/jazz.jpg";
import tre from "$lib/assets/images/stratgg-team-avatars/tre.jpg";
import basic from "$lib/assets/images/stratgg-team-avatars/default.svg";
</script>

<Nav/>
<div id="teamContainer" class="flex flex-col text-center justify-center ">
  <!-- START OF TOP ROW -->
  <div class="flex flex-col justify-center xl:flex-row m-auto" id="teamTopRow">
   
    <!-- TRE CARD -->
    <div id="treContainer" class=" m-10 bg-secondary rounded-2xl w-96 h-96 hover:cursor-pointer hover:shadow-black hover: shadow-2xl hover:bg-slate-600 text-white group [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl  duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)]">
   
    <div class="  avatar mt-20 [backface-visibility:hidden]" id="treAvatar">
      <div class=" w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img  src={tre}/>
      </div>
    </div>

<div id="treBio" class="text-center [backface-visibility:hidden]">
      <h1>Theyar Weaver III</h1>
      <h1>Founder</h1>
      <p>Halo 3</p>
    </div>
<!-- TRE CARD FLIPSIDE -->
      <div class="absolute inset-0 h-full w-full rounded-xl text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <p class="text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis autem corporis quasi laborum odit debitis ad corrupti repellat necessitatibus eligendi accusamus ex quia consequatur, hic sint dolorum quam. A, possimus.</p>
        </div>
      </div>
    </div>
  </div>
 
   <!-- KOLEBE CARD -->
  <div id="kolebeContainer" class=" m-10 bg-secondary rounded-2xl w-96 h-96 hover:cursor-pointer hover:shadow-black hover: shadow-2xl hover:bg-slate-600 text-white group [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl  duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)]">
   
    <div class="  avatar mt-20 [backface-visibility:hidden]" id="kolebeAvatar">
      <div class=" w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img  src={basic}/>
      </div>
    </div>

<div id="kolebeBio" class="text-center [backface-visibility:hidden]">
      <h1>Kolebe Shanks</h1>
      <h1>UI/UX • Developer</h1>
      <p>Minecraft</p>
    </div>
<!-- KOLEBE CARD FLIPSIDE -->
      <div class="absolute inset-0 h-full w-full rounded-xl text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <p class="text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis autem corporis quasi laborum odit debitis ad corrupti repellat necessitatibus eligendi accusamus ex quia consequatur, hic sint dolorum quam. A, possimus.</p>
        </div>
      </div>
    </div>
  </div>
 
  <!-- MARSHALL CARD -->
  <div id="marshallContainer" class=" m-10 bg-secondary rounded-2xl w-96 h-96 hover:cursor-pointer hover:shadow-black hover: shadow-2xl hover:bg-slate-600 text-white group [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl  duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)]">
   
    <div class="  avatar mt-20 [backface-visibility:hidden]" id="marshallAvatar">
      <div class=" w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img  src={marshall}/>
      </div>
    </div>

<div id="marshallBio" class="text-center [backface-visibility:hidden]">
      <h1>Marshall Burns</h1>
      <h1>Lead Developer</h1>
      <p>Overwatch • Valorant</p>
    </div>
<!-- MARSHALL CARD FLIPSIDE -->
      <div class="absolute inset-0 h-full w-full rounded-xl text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <p class="text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis autem corporis quasi laborum odit debitis ad corrupti repellat necessitatibus eligendi accusamus ex quia consequatur, hic sint dolorum quam. A, possimus.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  
  <!-- START OF BOTTOM ROW -->
  <div class="flex flex-col justify-center xl:flex-row m-auto" id="teamBottomRow">
  <!-- LACY CARD -->
    <div id="lacyContainer" class=" m-10 bg-secondary rounded-2xl w-96 h-96 hover:cursor-pointer hover:shadow-black hover: shadow-2xl hover:bg-slate-600 text-white group [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl  duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)]">
   
    <div class="  avatar mt-20 [backface-visibility:hidden]" id="lacyAvatar">
      <div class=" w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img  src={basic}/>
      </div>
    </div>

<div id="lacyBio" class="text-center [backface-visibility:hidden]">
      <h1>Lacy Randolph</h1>
      <h1>Developer • Tester</h1>
      <p>Stardew Valley • Deep Rock Galactic</p>
    </div>
<!-- LACY CARD FLIPSIDE -->
      <div class="absolute inset-0 h-full w-full rounded-xl text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <p class="text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis autem corporis quasi laborum odit debitis ad corrupti repellat necessitatibus eligendi accusamus ex quia consequatur, hic sint dolorum quam. A, possimus.</p>
        </div>
      </div>
    </div>
  </div>
  
 <!-- JASMINE CARD -->
  <div id="testContainer" class=" m-10 bg-secondary rounded-2xl w-96 h-96 hover:cursor-pointer hover:shadow-black hover: shadow-2xl hover:bg-slate-600 text-white group [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl  duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)]">
   
    <div class="  avatar mt-20 [backface-visibility:hidden]" id="jasmineAvatar">
      <div class=" w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img  src={jasmine}/>
      </div>
    </div>

<div id="jasmineBio" class="text-center [backface-visibility:hidden]">
      <h1>Jasmine Zanders</h1>
      <h1>Developer</h1>
      <p>Sims 4 • Animal Crossing</p>
    </div>
<!-- JASMINE CARD FLIPSIDE -->
      <div class="absolute inset-0 h-full w-full rounded-xl text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <p class="text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis autem corporis quasi laborum odit debitis ad corrupti repellat necessitatibus eligendi accusamus ex quia consequatur, hic sint dolorum quam. A, possimus.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
  


<Footer/>
