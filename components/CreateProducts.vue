<script setup lang="ts">
import { ref } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import VEditor from "@morpheme/editor";
import { object, string, mixed, number } from "yup";
import { useForm } from "vee-validate";
import { useProductStore } from "~/stores/products";

const schema = object({
  image: mixed().required().label("Image"),
  name: string().required().label("Name"),
  price: number().required().label("Price"),
  category: string().required().label("Category"),
  description: string().required().label("Description"),
});

const { handleSubmit, resetForm, values } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  useProductStore().newProduct(values);
  resetForm();
  alert("Product added successfully!");
});

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("md");
const image = ref("");
const name = ref("");
const price = ref(0);
const category = ref("");
const description = ref("");
</script>

<template>
  <ClientOnly>
    <VCard>
      <div>
        <p class="text-lg font-semibold pb-6">Create Product</p>
      </div>
      <form @submit="onSubmit" class="border-none">
        <VFileUpload v-model="image" label="Image" theme="image" name="image" />
        <div class="grid grid-cols-2 gap-3 py-4">
          <VInput
            v-model="name"
            wrapper-class="mb-2"
            name="name"
            label="Name"
            placeholder="Product Name"
            class="pl-4"
          />
          <VInput
            v-model="price"
            wrapper-class="mb-2"
            name="price"
            label="Price"
            placeholder="Product Price"
            class="pl-4"
          />
        </div>
        <VInput
          v-model="category"
          wrapper-class="mb-6"
          name="category"
          label="Category"
          placeholder="Product Category"
          class="pl-4"
        />
        <VEditor
          v-model="description"
          name="description"
          label="Description"
          placeholder="Input your content"
        />
        <div class="mt-4">
          <VBtn type="submit" color="gray-blue" :block="isMobile"> Save </VBtn>
          <VBtn type="button" text @click="resetForm">Reset</VBtn>
        </div>
      </form>
    </VCard>
  </ClientOnly>
</template>

<style lang="scss"></style>
