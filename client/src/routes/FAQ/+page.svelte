<!-- This modifies the title of this page -->
<svelte:head>
  <title>StratGG / FAQ</title>
  <link rel="icon" href={favicon} />
 </svelte:head>

<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";
</script>

<Nav/>
<section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
        </div>

        <div class="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">What is StratGG?</p>
                    <p class="mt-4 text-base text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">Can I contribute to StratGG?</p>
                    <p class="mt-4 text-base text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">How do I give feedback and ask questions?</p>
                    <p class="mt-4 text-base text-gray-400">Visit our <a class="text-accent transition-all duration-200 hover:text-accent focus:accent hover:underline" href="/contact_us">Contact</a> page to leave us your feedback.
                               
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">How can StratGG benefit me?</p>
                    <p class="mt-4 text-base text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
        </div>

    </div>
</section>

<Footer/>