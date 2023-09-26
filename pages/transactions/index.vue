<template>
  <AppHeader title="Transactions" desc="Monitor your transactions here" />
  <TransactionTabs class="mt-6" />
</template>

<script setup lang="ts">
import type { VBreadcrumbItemProps } from "@morpheme/breadcrumbs";
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Admin Panel - Transactions";
});

definePageMeta({
  breadcrumbs: [
    {
      title: "Transactions",
      to: "/transactions",
    },
  ] as VBreadcrumbItemProps[],
});
</script>

<style scoped></style>
