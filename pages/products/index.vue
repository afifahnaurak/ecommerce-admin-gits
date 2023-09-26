<template>
  <AppHeader title="Products" desc="Manage your products here" />
  <ProductsTable class="mt-6" />
</template>

<script setup lang="ts">
import type { VBreadcrumbItemProps } from "@morpheme/breadcrumbs";
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Admin Panel - Products";
});

definePageMeta({
  breadcrumbs: [
    {
      title: "Products",
      to: "/products",
    },
  ] as VBreadcrumbItemProps[],
});
</script>

<style scoped></style>
