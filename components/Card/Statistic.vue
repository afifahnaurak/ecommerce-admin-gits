<template>
  <div class="grid md:grid-cols-4 gap-2">
    <VCard v-for="stat in statistic" :key="stat.title">
      <div class="flex justify-between pb-4">
        <p class="font-medium">{{ stat.title }}</p>
        <VIcon :name="stat.icon" size="sm" />
      </div>
      <p class="text-2xl font-semibold">{{ stat.number }}</p>
      <p class="text-gray-500">{{ stat.upgrade }}</p>
    </VCard>
  </div>
</template>

<script setup lang="ts">
const statistic = ref([
  {
    title: "Total Revenue",
    icon: "dashicons:money-alt",
    number: "$45,231.89",
    upgrade: "+20.1% from last month",
  },
  {
    title: "Transactions",
    icon: "ph:hand-coins",
    number: "+2350",
    upgrade: "+180.1% from last month",
  },
  {
    title: "Categories",
    icon: "iconamoon:category",
    number: "142",
    upgrade: "+19% from last month",
  },
  {
    title: "Cancelled",
    icon: "mdi:cancel-bold",
    number: "2",
    upgrade: "+0,0002% since last hour",
  },
]);
</script>

<style lang="scss"></style>
