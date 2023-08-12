<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>

<script setup>
import { TITLE } from "~/data/general";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${TITLE}` : TITLE;
  }
})
</script>
