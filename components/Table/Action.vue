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
import { useProductStore } from "~/stores/products";

const { id } = defineProps<{
  id: number;
  path?: string;
}>();

const modalDeleteIsOpen = ref(false);
const router = useRouter();
const productStore = useProductStore();

function goToEditPage() {
  const editRoute = `/products/edit/${id}`;
  router.push(editRoute);
}

function onDelete(id: number) {
  productStore.products = productStore.products.filter(
    (item) => item.id !== id
  );
  modalDeleteIsOpen.value = false;
  alert("Delete");
}
</script>

<style lang="scss"></style>
