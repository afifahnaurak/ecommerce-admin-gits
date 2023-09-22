<template>
  <div>
    <h1 class="text-2xl lg:text-3xl font-semibold mb-1">{{ title }}</h1>
    <p class="text-slate-500">
      {{ desc }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  desc: String,
});
</script>

<style lang="scss"></style>
