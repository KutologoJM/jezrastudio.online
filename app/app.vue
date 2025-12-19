<script setup lang="ts">
import NavigationBar from "~/navigation-bar.vue";
</script>
<template>
  <NuxtRouteAnnouncer/>
  <navigation-bar/>

  <div class="border max-w-6xl mx-auto min-h-screen">
    <NuxtPage/>
  </div>


</template>