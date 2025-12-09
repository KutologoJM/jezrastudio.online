<script setup lang="ts">

</script>

<template>
  <div class=" w-full">

    <h2 class="text-3xl font-bold text-center">
      About Me:
    </h2>
    <div class="pl-5">
      <ul class=" list-disc list-inside">
        <li>
          Item 1
        </li>
        <li>
          Item 2
        </li>
        <li>
          Item 3
        </li>
        <li>
          Item 4
        </li>
      </ul>
    </div>


    <div class="overflow-x-auto">
      <h3 class="text-2xl text-center">
        Tech Stack
      </h3>
      <table class="table">
        <!-- head -->
        <thead>
        <tr>
          <th/>
          <th>Category</th>
          <th>Tools</th>
        </tr>
        </thead>

        <tbody>
        <!-- row 1 -->
        <tr>
          <th>1</th>
          <td>Backend</td>
          <td>Python · Django · DRF · Flask</td>
        </tr>
        <!-- row 2 -->
        <tr>
          <th>2</th>
          <td>Frontend</td>
          <td>HTML · CSS · Tailwindcss · Nuxt.js · Vue.js</td>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>3</th>
          <td>Database</td>
          <td>PostgreSQL · SQLite</td>
        </tr>
        <!-- row 4 -->
        <tr>
          <th>4</th>
          <td>Tooling</td>
          <td>Render · Cloudflare · Linux</td>
        </tr>
        <!-- row 5 -->
        <tr>
          <th>5</th>
          <td>Misc</td>
          <td> N/A</td>
        </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>

<style scoped>

</style>