<script>
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Counter from "./Counter.svelte";
	
</script>

<section class="hidden lg:block">
<section>
<div class="flex justify-between bg-dark text-white text-sans font-light py-5 text-base">
   <div class="flex ml-20"><p>Welcome to Needus & Get the best product</p></div>
   <div class="flex space-x-14 text-base text-sans">
    <div class="flex space-x-3 mr-10">    
	<a href="/">ENG</a>
	<svg class="w-6 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
    </svg>
    <p>|</p>
	<a href="/">USD</a>
	<svg class="w-6 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
    </svg>
    </div>
   </div>
</div>
</section>

<section>
<div class="flex py-8">
	<div class="flex w-1/4 items-center">
		<div class="ml-14"><img src="/images/Needus.png" alt="logo"></div>
	</div>

	<div class="w-3/4 flex">
	    <div class="w-1/3">
			<div class="border-dark  bg-white border-2 border-gray flex">
				<input
				  type="text"
				  class="font-sans font-light text-xl ml-1"
				  placeholder="Search products"
				/>
				<button
				  class="bg-dark text-white py-5 my-1 px-4 hover:bg-dark"
				>
				<svg class="w-6 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
				  </svg>
				 </button>   
			</div>
		</div>

		<div class="w-2/3 flex border-dark bg-white border-2 border-gray flex items-center text-xl text-new mr-3">
			<div class="flex px-5 space-x-2">
				<a href="/">All Categories</a>
				 <svg class="w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
				 </svg>
			  </div>
	  
			  <div class="flex pl-32 pr-6 space-x-2">
				 <a href="/">Login</a>
				 <p class="text-gray">|</p>
				 <a href="/">Signup</a>
			  </div>

			  <div class="flex space-x-3">
				<svg class="w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
				</svg>
			
				<svg class="w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
				</svg>
			  </div>
	
		
		</div>
	
	</div>

</div>
</section>

<section>
   <Navbar />
</section>

<section>
 <div class=" bg-gray py-16 space-y-3">
 <div class="flex justify-center text-sans text-new font-medium text-[40px]">
	<h1>TV COLLECTION</h1>
   </div>
    <div class=" flex justify-center text-sans text-lg font-light tracking-widest">
	<p>HOME / PRODUCT / TV COLLECTION</p>
 </div>
</div>	

</section> 

<section class="flex pb-16">
<div class="flex w-1/2 ml-14 pt-20 space-x-4">
	<div class="w-1/5">
	  <div class="space-y-6">
		<div class="border-[1px] py-5" style="border-color:#E73C17;">
        <img src="/images/tv2.png" alt="tv2">
	    </div>

		<div class="border-[1px] py-5" style="border-color:#F0F0F0;">
			<img src="/images/tv2.png" alt="tv2">
		</div>

		<div class="border-[1px] py-5" style="border-color:#F0F0F0;">
			<img src="/images/tv2.png" alt="tv2">
		</div>

		<div class="border-[1px] py-5" style="border-color:#F0F0F0;">
			<img src="/images/tv2.png" alt="tv2">
	    </div>
	  </div>
	</div>

    <div class="w-4/5 bg-gray2 pt-28 pl-6 max-h-[491px]">
		<img src="/images/Tv_main.png" alt="tv2">
	</div>
	
</div>

<div class="w-1/2 ml-10 pt-20 space-y-2">
	<p>Brand: LG </p>
	<p>Model: OLED42C2PSA</p>
	<p>Availability: Only 2 in Stock</p>

	<p class="font-medium text-new text-[32px] mr-8">LG C2 42 (106cm) 4K Smart OLED EVO TV | WebOS | Cinema HDR</p>
	
	<div class="flex">
	<svg class="text-orange w-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
	</svg>
	<svg class="text-orange w-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
	</svg>
	<svg class="text-orange w-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
	</svg>
	</div>
   
	<div class="pb-4">
	<ul class="list-outside list-disc ml-7 space-y-2 pt-2">
		<li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
		<li>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</li>
		<li>Hands-free Voice Control, Always Ready</li>
		<li>Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode</li>
		<li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
	</ul>
   </div>

	<div class="flex text-center border-t-[1px] pt-10 -space-x-5" style="border-color:#F0F0F0; color: #6F6F6F">
        <div class="w-1/3 border-[1px] py-4 text-orange" style="border-color:#E73C17;">
			<p>106 cm (42)</p>
		</div>
		<div class="w-1/3 py-4">
			<p>121 cm (48)</p>
		</div>
		<div class="w-1/3 py-4">
			<p>139 cm (55)</p>
		</div>
	</div>
	
	<div class="flex text-center border-b-[1px] -space-x-5  pb-4" style="border-color:#F0F0F0; color: #6F6F6F;">
        <div class="w-1/3 py-4">
			<p>164 cm (65)</p>
		</div>
		<div class="w-1/3 py-4">
			<p>196 cm (65)</p>
		</div>
		<div class="w-1/3 py-4">
			<p>210 cm (83)</p>
		</div>
	</div>

	<div class="flex">
	  <div class="flex w-1/2" style="border-color:#F0F0F0; color: #191919;">
          <div class="py-4 space-y-2">
			 <p>USD(incl. of all taxes)</p>
			 <p class="text-3xl text-new">$600.72</p>
			 <div class="mt-2">
				<button type="submit" class="py-4 px-10 w-full text-lg font-sans font-normal text-center text-white cursor-pointer bg-orange">Buy now</button>
			 </div>
		  </div>
		
	    </div>

		<div class="flex w-1/2" style="border-color:#F0F0F0; color: #191919;">
			<div class="py-2 space-y-2">
			   <Counter />
			   <slot />
			   <div class="mt-2">
				  <button type="submit" class="py-4 px-10 w-full text-lg font-sans font-normal text-center text-orange border-[1px] cursor-pointer">Add to Cart</button>
			   </div>
			</div>
		  
		  </div>

	
	
	</div>

</div>

</section>

<section>
	<body class=" flex items-center">
		<div class="mx-auto px-8 sm:px-0">
		  <div class="sm:w-9/12 sm:mx-auto">
			<div 
			  role="tablist"
			  aria-label="tabs"
			  class="relative mx-auto h-12 grid grid-cols-3 items-center overflow-hidden transition"
			>
			  <div class="absolute indicator h-11 left-0"></div>
			  <button
				role="tab"
				aria-selected="true"
				aria-controls="panel-1"
				id="tab-1"
				tabindex="0"
				class="relative block h-10 px-6 tab rounded-full"
			  >
			 <div class='border-b-[1px] w-48' style="border-color:#E73C17;">
			  <span class="font-medium text-[22px]">Description</span>
			</div>	
			  </button>
			  <button
				role="tab"
				aria-selected="false"
				aria-controls="panel-2"
				id="tab-2"
				tabindex="-1"
				class="relative block h-10 px-6 tab rounded-full"
			  >
				<span class="font-medium text-[22px]">Specification</span>
			  </button>
			  <button
				role="tab"
				aria-selected="false"
				aria-controls="panel-3"
				id="tab-3"
				tabindex="-1"
				class="relative block h-10 px-6 tab rounded-full"
			  >
				<span class="font-medium text-[22px]">Reviews</span>
			  </button>
			</div>
			<div class="relative rounded-3xl bg-purple-50">
			  <div
				role="tabpanel"
				id="panel-1"
				class="tab-panel p-6 transition duration-300 space-y-4"
			  >
				
				<p class="text-gray-600">The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers.</p>

					<p>*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.</p>
					
				<p>**65C2 Stand model is at a minimum 39% lighter than the C1 series. <span class="text-orange">more...</span></p>
					 
			  </div>
			  <div
				role="tabpanel"
				id="panel-2"
				class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
			  >
				<h2 class="text-xl font-semibold text-gray-800">Second tab panel</h2>
				<p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
			  </div>
			  <div
				role="tabpanel"
				id="panel-3"
				class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
			  >
				<h2 class="text-xl font-semibold text-gray-800">Third tab panel</h2>
				<p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
			  </div>
			</div>
		  </div>
		</div>
													 
		<script type="module" src="./main.js"></script>
	  </body>

</section>


<section>

<div class="text-center justify-center font-medium text-[32px] pt-20"><h1>Related products</h1></div>
  <div class="flex pt-10 space-x-6 mx-20 mt-4">
    <div class="w-1/4 bg-gray2 items-center justify-center pb-8">
	  <div class="flex justify-between mx-6">
		<div class="flex  justify-center">
		<p class="rounded-2xl bg-green my-5 text-white text-xs justify-center py-1.5 px-4" >NEW</p>
    	</div>
        <div class="border-[1.9px] rounded-full p-3 mt-4" style="border-color:#D7D7D7">
			<svg class="w-7 text-orange" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
		  </svg>
		</div>
	 </div>
	  <img class="ml-2.5 w-11/12" src="/images/image_7.png" alt="tv">
	  <div class="flex justify-center">
		<button type="submit" class="flex py-3 px-9 text-lg font-sans font-normal text-center text-gray_soft cursor-pointe bg-white"><svg class="w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
		  </svg> Add to cart
		</button>
	  </div>
      </div>


	 <div class="w-1/4 bg-gray2 justify-center">
		<div class="flex  justify-left ml-6">
			<p class="rounded-2xl bg-orange my-5 text-white text-xs justify-center py-1.5 px-4" >-10%</p>
		</div>
		<img class="mr- mt-3" src="/images/image_8.png" alt="tv">
		<div class="flex mt-2  justify-center">
			<button type="submit" class="flex py-3 px-9 text-lg font-sans font-normal text-center text-gray_soft cursor-pointe bg-white"><svg class="w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
			  </svg> Add to cart
			</button>
		  </div>
	 </div>
	 <div class="w-1/4 bg-gray2 justify-center">
		<div class="flex  justify-left ml-6">
			<p class="rounded-2xl bg-yellow my-5 text-white text-xs justify-center py-1.5 px-4" >HOT</p>
		</div>
		<img class="w-60 ml-5 mt-2" src="/images/image_9.png" alt="tv">
		<div class="flex mt-2  justify-center">
			<button type="submit" class="flex py-3 px-9 text-lg font-sans font-normal text-center text-gray_soft cursor-pointe bg-white"><svg class="w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
			  </svg> Add to cart
			</button>
		  </div>
	 </div>
	 <div class="w-1/4 bg-gray2 justify-center">
		<div class="flex  justify-left ml-6">
			<p class="rounded-2xl bg-purple my-5 text-white text-xs justify-center py-1.5 px-4" >2 Years Warranty</p>
		</div>
		<img class="w-10/12 ml-6 mt-12" src="/images/image_10.png" alt="tv">
		<div class="flex mt-12  justify-center">
			<button type="submit" class="flex py-3 px-9 text-lg font-sans font-normal text-center text-gray_soft cursor-pointe bg-white"><svg class="w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
			  </svg> Add to cart
			</button>
		  </div>
	</div>

  </div>
</section>

<section>
<div class="flex mx-16 mt-8">
   <div class="w-1/4 space-y-2 ">
	<div class="justify-center flex">

		<p class="text-new font-normal text-xl">Sony BRAVIA XR Android Tv</p>
		
	</div>

	<div class="flex justify-center space-x-2">

		<p class="text-new font-semibold text-xl">$800.22</p>
		<p class="text-gray3 font-semibold text-xl"><del>$1000.66</del></p>
		
	</div>
  </div>

  <div class="w-1/4 space-y-2 ">
	<div class="justify-center flex">

		<p class="text-new font-normal text-xl">Mi P1 Smart Android HD TV</p>
		
	</div>

	<div class="flex justify-center space-x-2">
		<p class="text-new font-semibold text-xl">$400.00</p>	
	</div>
  </div>

  <div class="w-1/4 space-y-2 ">
	<div class="justify-center flex">

		<p class="text-new font-normal text-xl">Konka OLED Android Tv</p>
		
	</div>

	<div class="flex justify-center space-x-2">

		<p class="text-new font-semibold text-xl">$700.00</p>		
	</div>
  </div>

  <div class="w-1/4 space-y-2 ">
	<div class="justify-center flex">

		<p class="text-new font-normal text-xl">TCL Roku Android Tv</p>
		
	</div>

	<div class="flex justify-center space-x-2">
		<p class="text-new font-semibold text-xl">$800.00</p>	
	</div>
  </div>
</section>

<section>
	<div class="flex justify-center pt-6 pb-14">
		<p class="text-4xl text-orange">&bull;</p>
		<p class="text-4xl text-gray">&bull;</p>
		<p class="text-4xl text-gray">&bull;</p>
		<p class="text-4xl text-gray">&bull;</p>
	</div>
		
	  
</section>

<section>
	<div class="flex bg-[url('/images/Rectangle36.png')] w-full h-[120px] bg-cover">
		<div class="flex">
			<div class="flex flex-col w-1/2 py-6">
				<div class="flex flex-col w-full mx-20 space-y-1">
					<h1 class="text-white text-[28px] font-heading font-medium leading-10">Join our newsletter and get offers</h1>
					<p class="font-sans text-white font-normal text-lg leading-6">Sign up our newsletter</p>
				</div>
			</div>
		
			<div class="flex flex-col w-1/2 my-6 items-center">
				<form action="#">
					<div class="items-center mx-auto max-w-screen-sm sm:flex sm:space-y-0">
						<div class="relative w-96">
							<label for="email" class="hidden mb-2 text-sm">Email address</label>
							<input class="block p-5 px-11 font-sans text-brown2 text-lg bg-peach bg-opacity-30" placeholder="Enter your email" type="email" id="email">
						</div>
						<div class="w-11/12">
							<button type="submit" class="-ml-10 py-5 px-20 text-center text-lg font-sans font-semibold text-center text-white cursor-pointer bg-orange">SUBSCRIBE</button>
						</div>
					</div>
				</form>
			</div>
		
		 </div>
	</div>
</section>

<section>
	<Footer/>
	<slot />
</section>
</section>

