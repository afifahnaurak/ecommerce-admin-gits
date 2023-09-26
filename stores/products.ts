import { ref } from "vue";
import { defineStore } from "pinia";
import { TProduct } from "~/types/product.type";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: items,
    product: {} as TProduct[],
    loading: true,
  }),
  getters: {},
  actions: {
    newProduct(values: any) {
      this.products.push({
        id: Math.random(),
        image: [
          "https://i.pinimg.com/564x/48/d0/c0/48d0c0ce75139eec1c78cc299149ed2d.jpg",
        ],
        name: values.name,
        price: values.price,
        category: values.category,
        description: values.description,
      });
    },

    editProduct(productId: number, editedProduct: any) {
      const index = this.products.findIndex(
        (product) => product.id === productId
      );

      if (index !== -1) {
        this.products.splice(index, 1, {
          ...this.products[index],
          ...editedProduct,
        });
      }
    },

    deleteProduct(productId: number) {
      this.products = this.products.filter(
        (product) => product.id !== productId
      );
    },

    searchProducts(searchTerm: string) {
      const filteredProducts = items.value.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.products = filteredProducts;
    },
  },
});

function GenerateRandomPicsumImageLinks(count: number) {
  const imageLinks = [];

  for (let i = 0; i < count; i++) {
    const imageUrl = `https://picsum.photos/300/300?random=${i}`;
    imageLinks.push(imageUrl);
  }
  return imageLinks;
}

export const items = ref<TProduct[]>([
  {
    id: 1,
    name: "Smartphone",
    price: 599.99,
    category: "Electronics",
    image: GenerateRandomPicsumImageLinks(1),
  },
  {
    id: 2,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    image: GenerateRandomPicsumImageLinks(2),
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 40.99,
    category: "Kitchen Appliances",
    image: GenerateRandomPicsumImageLinks(3),
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 79.99,
    category: "Footwear",
    image: GenerateRandomPicsumImageLinks(4),
  },
  {
    id: 5,
    name: "HD TV",
    price: 799.99,
    category: "Electronics",
    image: GenerateRandomPicsumImageLinks(5),
  },
  {
    id: 6,
    name: "Desk Chair",
    price: 149.99,
    category: "Furniture",
    image: GenerateRandomPicsumImageLinks(6),
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 69.99,
    category: "Electronics",
    image: GenerateRandomPicsumImageLinks(7),
  },
  {
    id: 8,
    name: "Digital Camera",
    price: 399.99,
    category: "Electronics",
    image: GenerateRandomPicsumImageLinks(8),
  },
  {
    id: 9,
    name: "Microwave Oven",
    price: 129.99,
    category: "Kitchen Appliances",
    image: GenerateRandomPicsumImageLinks(9),
  },
  {
    id: 10,
    name: "Running Shorts",
    price: 29.99,
    category: "Clothing",
    image: GenerateRandomPicsumImageLinks(10),
  },
  {
    id: 11,
    name: "Gaming Console",
    price: 499.99,
    category: "Electronics",
    image: GenerateRandomPicsumImageLinks(11),
  },
  {
    id: 12,
    name: "Coffee Table",
    price: 199.99,
    category: "Furniture",
    image: GenerateRandomPicsumImageLinks(12),
  },
  {
    id: 13,
    name: "Dumbbell Set",
    price: 89.99,
    category: "Fitness Equipment",
    image: GenerateRandomPicsumImageLinks(13),
  },
  {
    id: 14,
    name: "Hiking Backpack",
    price: 79.99,
    category: "Outdoor Gear",
    image: GenerateRandomPicsumImageLinks(14),
  },
  {
    id: 15,
    name: "Men's Watch",
    price: 149.99,
    category: "Accessories",
    image: GenerateRandomPicsumImageLinks(15),
  },
  {
    id: 16,
    name: "Women's Handbag",
    price: 69.99,
    category: "Accessories",
    image: GenerateRandomPicsumImageLinks(16),
  },
  {
    id: 17,
    name: "Digital Thermometer",
    price: 19.99,
    category: "Health & Wellness",
    image: GenerateRandomPicsumImageLinks(17),
  },
  {
    id: 18,
    name: "Kitchen Knife Set",
    price: 59.99,
    category: "Kitchenware",
    image: GenerateRandomPicsumImageLinks(18),
  },
  {
    id: 19,
    name: "Yoga Mat",
    price: 24.99,
    category: "Fitness Equipment",
    image: GenerateRandomPicsumImageLinks(19),
  },
  {
    id: 20,
    name: "Desk Lamp",
    price: 34.99,
    category: "Home Decor",
    image: GenerateRandomPicsumImageLinks(20),
  },
]);
