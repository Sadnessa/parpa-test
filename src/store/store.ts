import { defineStore } from "pinia";

import { useStorage } from "@vueuse/core";

import axios from "axios";

export const useParpaStore = defineStore("parpa", {
  state: () => ({
    productsList: [] as Array<{ [key: string]: string }>,
    userCart: useStorage(
      "cart-storage",
      [] as Array<{ [key: string]: string }>
    ),
    paginationValue: 0,
    loaded: false,

    categories: {
      1: "Блузка",
      2: "Рубашка",
      3: "Юбка",
      4: "Топ",
      5: "Джинсы",
      6: "Куртка",
      7: "Жакет",
      8: "Жилет",
      9: "Шорты",
    } as { [key: number]: string },
  }),

  actions: {
    async getProductsList() {
      try {
        const response = await axios.get(
          "https://api.platovcorp.site/product.json"
        );
        this.productsList = response.data;
        this.loaded = true;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
