<template>
  <AppHeader
    title="Dashboard"
    desc="Monitor your metrics for shipping, transactions, product and many more in here"
  />
  <CardStatistic class="mt-6" />
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Admin Panel";
});
</script>

<style scoped></style>
