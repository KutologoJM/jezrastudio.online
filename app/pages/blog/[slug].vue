<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>

<template>
  <div class="prose">
    <ContentRenderer v-if="page" :value="page" :prose="true" />
  </div>
</template>