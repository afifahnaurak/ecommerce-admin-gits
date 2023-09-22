<template>
  <div class="container mx-auto px-4 pt-6">
    <VBreadcrumbs>
      <VBreadcrumbsItem to="/">
        <VIcon name="lucide:home" class="w-6 h-6 p-1" />
      </VBreadcrumbsItem>
      <VBreadcrumbsDivider />
      <div v-for="(item, index) in items" :key="item.title">
        <VBreadcrumbsItem :to="item.to">
          {{ item.title }}
        </VBreadcrumbsItem>
        <VBreadcrumbsDivider v-if="items.length - 1 !== index" />
      </div>
    </VBreadcrumbs>
  </div>
</template>

<script setup lang="ts">
import type { VBreadcrumbItemProps } from "@morpheme/breadcrumbs";

const route = useRoute();

const items = computed<VBreadcrumbItemProps[]>(() => {
  return (route.meta.breadcrumbs ?? []) as VBreadcrumbItemProps[];
});
</script>

<style lang="scss">
:root {
  --breadcrumbs-item-active-color: var(--color-gray-blue-600);
  --breadcrumbs-item-active-bg-color: var(--color-gray-blue-100);
  --breadcrumbs-item-hover-color: var(--color-gray-blue-400);
}
</style>
