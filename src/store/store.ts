import { defineStore } from "pinia";
import axios from "axios";

export const useParpaStore = defineStore("parpa", {
  state: () => ({ productsList: [], userCart: [] }),

  actions: {
    async getProductsList() {
      try {
        const response = await axios.get(
          "https://api.platovcorp.site/product.json"
        );
        this.productsList = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
