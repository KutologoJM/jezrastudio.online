<script setup>
const slug = useRoute().params.slug
const { data: devlog } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('dev_blog').path(`/dev/${slug}`).first()
})
</script>

<template>
  <div class="prose">
    <h1>Home</h1>
    <ContentRenderer v-if="devlog" :value="devlog" :prose="true" />
  </div>
</template>
