<script setup lang="ts">
import { NavDrawer } from "@morpheme/nav-drawer";
import { ref } from "vue";
import Button from "@morpheme/button";

import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("sm");
const isAsideOpen = ref(false);
const isMini = ref(false);

provide("isMini", isMini);

watchEffect(() => {
  isAsideOpen.value = !isMobile.value;
});

function onMenuClick() {
  if (isMobile.value) isAsideOpen.value = false;
}
</script>

<template>
  <VAppShell
    padded-container
    main-class="bg-slate-50"
    container-class="md:px-10"
  >
    <template #header>
      <VAppBar
        shadow
        class="py-3 px-4 !flex lg:!hidden !z-[1]"
        size="auto"
        sticky
      >
        <div class="flex-1" />
        <div class="flex items-center gap-3">
          <VBtn
            color="gray-blue"
            prefix-icon="ic:round-menu"
            @click="isAsideOpen = !isAsideOpen"
            class="mr-2"
          />
        </div>
      </VAppBar>
    </template>

    <template #navigation>
      <AppBreadcrumbs />
    </template>

    <template #aside>
      <VNavDrawer
        v-model="isAsideOpen"
        v-model:mini="isMini"
        color="gray-blue"
        :fixed="isMobile"
        sticky
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :shadow="isMobile"
        :bordered="!isMobile"
        :class="[
          isMobile ? '[--nav-drawer-width:80%]' : '[--nav-drawer-width:300px]',
          { 'z-20': isMobile },
        ]"
      >
        <div class="flex items-center gap-2 pr-2 pl-4 p-3 justify-between">
          <NuxtLink to="/home" class="font-semibold lg-h-[60px] pt-2 truncate">
            E-Commerce
          </NuxtLink>
          <VBtn
            v-if="!isMobile"
            color="gray-blue"
            prefix-icon="ic:round-menu"
            @click="isMini = !isMini"
          />
        </div>
        <div class="overflow-y-auto flex-1">
          <AppSidebar @menu-click="onMenuClick" />
        </div>
      </VNavDrawer>
    </template>

    <slot />
  </VAppShell>
</template>
