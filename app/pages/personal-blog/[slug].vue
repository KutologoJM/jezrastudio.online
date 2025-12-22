<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('personal_blog').path(`/personal/${slug}`).first()
})
</script>

<template>
  <div class="prose">
    <ContentRenderer v-if="post" :value="post" :prose="true" />
  </div>
</template>
