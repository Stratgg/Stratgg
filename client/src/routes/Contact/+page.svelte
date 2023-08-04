<!-- This modifies the title of this page -->
<svelte:head>
  <title>StratGG / Contact Us</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte"
  import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";

  let status = "";
const handleSubmit = async function(data:any) {
  status = 'Submitting...'
  const formData = new FormData(data.currentTarget)
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: json
  });
  const result = await response.json();
  if (result.success) {
      console.log(result);
      status = result.message || "Success"
  }
}
</script>

  <Nav/> 

<h1 class="mb-4 text-4xl tracking-tight text-center text-white-900 dark:text-white">Contact Us</h1>
  

  <div class="flex mb-4">
   
    <div class="w-1/2">
    


    </div>
    
    <div class="w-1/2">
      <form on:submit|preventDefault={handleSubmit}>
        <input type="hidden" name="access_key" value="4ca65685-6d54-4f45-a676-c573dfaa9303">
        <label for="name">Name </label>
        <input type="text" name="name" placeholder="Name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"required />
        <label for="email">Email </label>
        <input type="email" name="email" placeholder="Email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
        <label for="message">Message </label>
        <textarea name="message" required rows="3" placeholder="Message" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"></textarea>
        <input type="submit" />
      </form>
    </div>
  
  </div>

<div>{status}</div>

  <Footer/> 