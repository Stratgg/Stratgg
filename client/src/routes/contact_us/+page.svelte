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

  <section class="dark:bg-gray-900">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-center dark:text-white">Contact Us</h1>
      <p class="mb-8 lg:mb-16 font-light text-center text-sky-500 dark:text-sky-500 sm:text-xl">Got a technical issue? Need account help? Have ideas for improvements? Let us know.</p>

 
      <form on:submit|preventDefault={handleSubmit} class="space-y-8">
        <input type="hidden" name="access_key" value="4ca65685-6d54-4f45-a676-c573dfaa9303">
        <div>
        <label for="name" class="block mb-2 text-sm font-medium text-sky-500 dark:text-sky-500">Name </label>
        <input type="text" name="name" placeholder="Name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"required />
        </div>
        <div>
        <label for="email" class="block mb-2 text-sm font-medium text-sky-500 dark:text-sky-500">Email </label>
        <input type="email" name="email" placeholder="Email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
        </div>
        <div class="sm:col-span-2">
        <label for="message" class="block mb-2 text-sm font-medium text-sky-500 dark:text-sky-500">Message </label>
        <textarea name="message" required rows="3" placeholder="Message" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"></textarea>
        </div>
        <input type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"/>
      </form>
      </div>
      </section>
    <!-- </div> -->
  
  <!-- </div> -->

<div>{status}</div>

  <Footer/> 