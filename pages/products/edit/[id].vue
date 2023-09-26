<template>
  <AppHeader title="Products" desc="Manage your products here" class="mb-6" />
  <EditProducts />
</template>

<script setup lang="ts">
import type { VBreadcrumbItemProps } from "@morpheme/breadcrumbs";
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Edit Product";
});

definePageMeta({
  breadcrumbs: [
    {
      title: "Products",
      to: "/products",
    },
    {
      title: "Edit Product",
      to: "/products/edit",
    },
  ] as VBreadcrumbItemProps[],
});
</script>

<style scoped></style>
