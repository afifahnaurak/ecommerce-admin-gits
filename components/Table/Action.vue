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
    @confirm="onDelete(id)"
  >
    <p>Are you sure want to delete this item?</p>
  </VModal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { items } from "~/stores/products";

defineProps<{
  id: number;
  path?: string;
}>();

let idToDelete: number | null = null;

const modalDeleteIsOpen = ref(false);
const router = useRouter();

function goToEditPage() {
  const editRoute = "/products/edit";
  router.push(editRoute);
}

function onConfirm() {
  alert("Delete");
}

function onDelete(id: number) {
  items.value = items.value.filter((item) => item.id !== id);
  modalDeleteIsOpen.value = false;
}
</script>

<style lang="scss"></style>
