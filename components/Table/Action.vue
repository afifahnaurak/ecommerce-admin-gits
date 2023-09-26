<template>
  <div class="flex items-center justify-center gap-2">
    <VBtn text prefix-icon="untitled:eye" @click="modalShowHandler" />
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
  <VModal v-model="modalShowIsOpen" title="Detail Product" centered>
    <div>
      <VText variant="lg" font-weight="medium" class="mt-6">Image</VText>
      <img
        :src="String(productStore.product[0].image)"
        alt="Product Image"
        class="mt-4 mx-auto border rounded-xl"
      />
      <VText variant="lg" font-weight="medium" class="mt-6">Product Name</VText>
      <p class="mt-2">{{ productStore.product[0].name }}</p>
      <VText variant="lg" font-weight="medium" class="mt-6">Price</VText>
      <p class="mt-2">${{ productStore.product[0].price }}</p>
      <VText variant="lg" font-weight="medium" class="mt-6">Category</VText>
      <p class="mt-2">{{ productStore.product[0].category }}</p>
    </div>
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
const modalShowIsOpen = ref(false);
const router = useRouter();
const productStore = useProductStore();

function goToEditPage() {
  const editRoute = `/products/edit/${id}`;
  router.push(editRoute);
}

function onDelete(id: number) {
  productStore.deleteProduct(id);
  modalDeleteIsOpen.value = false;
  alert("Delete");
}

function modalShowHandler() {
  productStore.showProductDetails(id);
  modalShowIsOpen.value = true;
}
</script>

<style lang="scss"></style>
