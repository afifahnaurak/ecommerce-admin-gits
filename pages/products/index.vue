<template>
  <AppHeader title="Products" desc="Manage your products here" />
  <ProductsTable class="mt-6" />
</template>

<script setup lang="ts">
import type { VBreadcrumbItemProps } from "@morpheme/breadcrumbs";

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
