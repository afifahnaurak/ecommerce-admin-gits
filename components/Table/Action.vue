<template>
  <div class="flex items-center justify-center gap-2">
    <VBtn text prefix-icon="untitled:eye" />
    <VBtn text prefix-icon="untitled:edit-01" @click="goToEditPage" />
    <VBtn
      text
      prefix-icon="untitled:trash-01"
      @click="modalDeleteIsOpen = !modalDeleteIsOpen"
    />
  </div>
  <VModal
    v-model="modalDeleteIsOpen"
    title="Delete Item"
    confirm
    confirm-text="Delete"
    confirm-color="error"
    centered
    footer-class="flex-row-reverse"
    close-text="Cancel"
    @confirm="onConfirm"
  >
    <p>Are you sure want to delete this item?</p>
  </VModal>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const { path } = defineProps<{
  id?: string | number;
  path?: string;
}>();

const modalDeleteIsOpen = ref(false);
const router = useRouter();

function goToEditPage() {
  const editRoute = "/products/edit";
  router.push(editRoute);
}

function onConfirm() {
  alert("Delete");
}
</script>

<style lang="scss"></style>
