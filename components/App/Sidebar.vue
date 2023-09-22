<script setup lang="ts">
import type { VMenuItem } from "@morpheme/menus/dist/types/VMenus.vue";
import { VList, VListItem, VListCollapse } from "@morpheme/ui";
import { ref } from "vue";

const isOpen = ref(false);
const isMini = ref(false);

export interface MenuItem extends VMenuItem {
  isActive?: () => boolean;
}

const route = useRoute();

const menus = ref<MenuItem[]>([
  {
    text: "Home",
    to: "/",
    prependIcon: "ep:menu",
    isActive() {
      return route.path === "/" && !route.hash;
    },
  },
  {
    text: "Products",
    to: "/products",
    prependIcon: "fluent:box-16-regular",
  },
  {
    text: "Transactions",
    to: "/transactions",
    prependIcon: "akar-icons:wallet",
  },
]);
</script>

<template>
  <VList hover class="custom-list">
    <template v-for="menu in menus" :key="menu.text">
      <VListCollapse v-if="menu.children">
        <template #activator="{ isOpen, toggle }">
          <VListItem
            v-bind="menu"
            :class="isMini ? 'justify-center' : ''"
            :hide-text="isMini"
            :hide-append="isMini"
            :append-icon-class="isOpen ? 'rotate-180' : ''"
            exact-active-class="active"
            @click="toggle"
          >
            {{ menu.text }}
          </VListItem>
        </template>
        <VList>
          <VListItem
            v-for="child in menu.children"
            :key="child.text"
            v-bind="child"
            :class="isMini ? 'justify-center' : ''"
            :hide-text="isMini"
            :hide-append="isMini"
          >
            {{ child.text }}
          </VListItem>
        </VList>
      </VListCollapse>
      <VListItem
        v-else
        v-bind="menu"
        :class="isMini ? 'justify-center' : ''"
        :hide-text="isMini"
        :hide-append="isMini"
      >
        {{ menu.text }}
      </VListItem>
    </template>
  </VList>
</template>

<style lang="scss">
:root {
  --v-list-item-color: var(--color-white);
  --v-list-item-hover-bg-color: var(--color-gray-blue-400);
  --v-list-item-hover-color: var(--color-white);
  --v-list-item-active-bg-color: var(--color-gray-blue-500);
  --v-list-item-active-border-color: var(--color-gray-blue-600);
  --v-list-item-active-color: var(--color-white);
  --v-list-item-icon-width: var(--size-spacing-8);
  --v-list-item-icon-height: var(--size-spacing-8);
}

.router-link-exact-active {
  background-color: var(--color-gray-blue-500);
}
</style>
