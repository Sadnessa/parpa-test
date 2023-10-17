<template>
  <section class="basketPage" :style="computeBasketPageStyle">
    <template v-if="store.userCart.length">
      <TransitionGroup name="list">
        <ProductBasketCard
          v-for="product in store.userCart"
          :key="product.id"
          :productName="product.title"
          @closeClick="deleteProduct(product)"
          :productDescription="getCategory(Number(product.category))"
          :productPrice="Number(product.price)"
        />
      </TransitionGroup>
    </template>
    <template v-else>
      <div class="basketPage__empty-list">
        <div>Корзина пуста</div>
        <CustomButton @click="$router.push({ name: 'Home' })">
          Добавить товары
        </CustomButton>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

import ProductBasketCard from "../components/ProductBasketCard.vue";
import CustomButton from "../components/base/CustomButton.vue";

import { useParpaStore } from "../store/store";

const store = useParpaStore();

const computeBasketPageStyle = computed(() => {
  return store.userCart.length > 0
    ? ({ gap: "20px" } as const)
    : ({ "justify-content": "center", "text-align": "center" } as const);
});

const deleteProduct = (product: { [key: string]: string }) => {
  store.userCart = store.userCart.filter((el) => {
    return el.id !== product.id;
  });
};

const getCategory = (id: number) => {
  return store.categories[id];
};
</script>

<style lang="scss" scoped>
.basketPage {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &__empty-list {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
