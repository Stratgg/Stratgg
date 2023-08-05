<!-- This modifies the title of this page -->
<svelte:head>
  <title>StratGG / Valorant</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";
</script>




<Nav/>
<header>Valorant</header>

<div id="valorantMainContianer" class="flex flex-row justify-around">
  
  <div id="valorantLeaderBoardAndSchedule" class="flex flex-row">
    <!-- Leaderboard -->
    <div id="valorantLeaderboardContainer" class="flex flex-col">
      <h1>Leaderboard</h1>
      <div id="valorantLeaderBoardNames">
        <ul >
          <li >
            player names go here
          </li>
          <li >
            player names go here
          </li>
        </ul>
      </div>
    </div>
    <!-- Schedule -->
    <div id="valorantScheduleContainer" class="flex flex-col" >
      <h1>Schedule</h1>
        <div id="valorantScheduleDates">
          <ul>
            <li>
              Axmen vs. Team Magma
              Jan 1st, 2023
            </li>
            <li>
              Team Magma vs. Dragons
              Jan 5th, 2023
            </li>
          </ul>
        </div>
    </div>
  </div>


<div id="valorantEventsAndResults" class="flex flex-col">
    <!--Upcoming Events  -->
    <div id="valorantUpcomingEvents">
      <h1>Upcoming Events</h1>

      <ul>
        <li>
          Porcipines vs. Axmen
          Sept 1st, 2023
        </li>

        <li>
          Dragons vs. Team Magma
          Sept 5th, 2023
      </ul>

    </div>
    <!-- Recent Game Results -->
    <div id="valorantRecentGameResults">
      <h1>Recent Game Results</h1>
      <ul>
        <li>
          Axmen vs. Team Magma
          Jan 1st, 2023
          Axemen 2 - 1 Team Magma
        </li>
        <li>
          Team Magma vs. Dragons
          Jan 5th, 2023
          Team Magma 2 - 1 Dragons
        </li>
      </ul>
    </div>
  </div>



</div>


<Footer/>