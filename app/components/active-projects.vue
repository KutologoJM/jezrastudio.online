<script setup lang="ts">

</script>

<template>
  <div class=" w-full ">
    <h2 id="active-projects" class="text-3xl font-bold text-center">
      Active Projects
    </h2>
    <section class=" w-full grid grid-cols-1 lg:grid-cols-2 gap-3 p-4">

      <div class="card w-full shadow-sm bg-base-200">
        <div class="card-body">
          <h2 class="card-title">
            <a
                href="https://github.com/KutologoJM/tempest"
                class="link">
              Tempest
            </a>
            <span class="badge badge-primary">Django / Python</span>
          </h2>
          <p>A collection of small apps that form my coding playground where I can have fun while still being
            productive.</p>
        </div>
      </div>

      <div class="card w-full shadow-sm bg-base-200">
        <div class="card-body">
          <h2 class="card-title">
            <a
                href="https://github.com/KutologoJM/oni-utility-suite"
                class="link">
              oni-utility-suite
            </a>
            <span class="badge badge-primary">DRF / Python</span>
          </h2>
          <p>My current main project. A suite of scripts, calculators and tools for Oxygen Not Included built in
            Django.</p>
        </div>
      </div>

    </section>

  </div>

</template>

<style scoped>

</style>