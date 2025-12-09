<script setup lang="ts">

</script>

<template>


  <section class="grid grid-cols-3 h-screen">
    <!-- Left sector (1/3)-->
    <aside class="col-span-1">

      <div class="h-full grid grid-rows-4 gap-4">

        <div class="row-span-1"> <!-- top -->
          <my-profile/>
        </div>

        <div class="row-span-2"> <!-- middle -->
          <blog-highlights/>
        </div>

        <div class="row-span-1"> <!-- bottom -->
          <left-section-footer/>
        </div>

      </div>

    </aside>

    <!-- Right sector (2/3)-->
    <div class="col-span-2 p-4 space-y-4">

      <!-- Row 1 -->
        <intro-blurb/>

      <!-- Row 2 -->
        <contact-info/>

      <!-- Row 3 -->
        <about-me/>


      <!-- Row 4 -->
      <featured-repos/>

      <!-- Row 5  -->
      <active-projects/>

      <!-- Row 6 (widget) -->
      <widgets-component/>

    </div>

  </section>


</template>

<style scoped>

</style>