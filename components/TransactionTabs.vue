<template>
  <VCard body-class="!p-0" hide-header hide-footer>
    <VTabs
      v-model="selectedTab"
      :items="items"
      active-class="!text-gray-blue-500"
      slider-class="!bg-gray-blue-500 !border-gray-blue-500"
    />
    <div class="p-4">
      <div v-if="selectedTab === 0">
        <h3 class="text-lg mb-2 font-semibold">Pending</h3>
        <VDataTable :headers="headers" :items="[]" />
      </div>
      <div v-if="selectedTab === 1">
        <h3 class="text-lg mb-2 font-semibold">Sending</h3>
        <VDataTable :headers="headers" :items="[]" />
      </div>
      <div v-if="selectedTab === 2">
        <h3 class="text-lg mb-2 font-semibold">Complete</h3>
        <VDataTable :headers="headers" :items="[]" />
      </div>
    </div>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { VDataTableHeader } from "@morpheme/table";

const states = ["active", "inactive"];

const items = ref([
  {
    text: "Tab Item 1",
  },
  {
    text: "Tab Item 2",
  },
  {
    text: "Tab Item 3",
  },
]);

const selectedTab = ref(0);

const headers = ref<VDataTableHeader[]>([
  {
    value: "ordernumber",
    text: "Order Number",
  },
  {
    value: "productname",
    text: "Product Name",
  },
  {
    value: "quantity",
    text: "Quantity",
  },
  {
    value: "phonenumber",
    text: "Phone Number",
  },
  {
    value: "address",
    text: "Address",
  },
]);
</script>

<style lang="scss"></style>
