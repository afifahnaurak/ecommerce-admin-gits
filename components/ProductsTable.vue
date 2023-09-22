<script setup lang="ts">
import { ref } from "vue";
import type { VDataTableHeader } from "@morpheme/table";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { items } from "~/stores/products";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("md");

const states = ["active", "inactive"];

const headers = ref<VDataTableHeader[]>([
  {
    value: "image",
    text: "Image",
  },
  {
    value: "name",
    text: "Name",
  },
  {
    value: "price",
    text: "Price",
  },
  {
    value: "category",
    text: "Category",
  },
  {
    value: "id",
    text: "Action",
    align: "center",
    sortable: false,
  },
]);
</script>

<template>
  <VCard body-class="!p-0" hide-header hide-footer>
    <div class="p-4">
      <div
        class="flex w-full md:flex-no-wrap flex-wrap justify-between items-center gap-2 mb-5"
      >
        <div>
          <VInput prepend-icon="ri:search-line" placeholder="Search" />
        </div>
        <NuxtLink to="/products/create">
          <VBtn
            color="gray-blue"
            prefix-icon="heroicons:plus-small-solid"
            :block="isMobile"
          >
            Add Product
          </VBtn>
        </NuxtLink>
      </div>
      <VDataTable :items="items" :headers="headers" hover>
        <template #item.image="{ item }">
          <div class="overflow-hidden rounded-md w-12 h-12 object-cover">
            <NuxtImg :src="String(item.image)" alt="Product Image" />
          </div>
        </template>
        <template #item.id="{ item }">
          <TableAction :id="item.id" path="/products" />
        </template>
      </VDataTable>
    </div>
  </VCard>
</template>

<style lang="scss"></style>
