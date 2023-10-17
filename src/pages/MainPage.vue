<template>
  <section class="mainPage">
    <div class="mainPage__loader" v-if="!store.loaded">
      <CustomLoader loaderColor="#BA967D" />
    </div>
    <template v-else>
      <div class="mainPage__products">
        <TransitionGroup name="list">
          <ProductMainCard
            v-for="product in products"
            :key="product.id"
            :productName="product.title"
            :productPrice="Number(product.price)"
            :productDescription="getCategory(Number(product.category))"
            @cartClick="addToCart(product)"
          />
        </TransitionGroup>
      </div>
      <div class="mainPage__actions">
        <CustomButton @click="loadPrev" v-if="store.paginationValue > 0">
          Назад
        </CustomButton>
        <div class="separator" />
        <CustomButton @click="loadNext" v-if="computeShowNext">
          Показать еще
        </CustomButton>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

import ProductMainCard from "../components/ProductMainCard.vue";
import CustomButton from "../components/base/CustomButton.vue";
import CustomLoader from "../components/base/CustomLoader.vue";

import { useParpaStore } from "../store/store";

const store = useParpaStore();

const cardsPerPage = 4;

const computePages = computed(() => {
  return store.productsList.length / cardsPerPage;
});

const computeShowNext = computed(() => {
  return store.paginationValue !== Math.ceil(computePages.value) - 1;
});

const products = computed(() => {
  return store.productsList
    .slice(cardsPerPage * store.paginationValue)
    .slice(0, cardsPerPage);
});

const loadNext = () => {
  store.paginationValue++;
};

const loadPrev = () => {
  store.paginationValue--;
};

const addToCart = (product: { [key: string]: string }) => {
  const alreadyExsist = store.userCart.some(
    (el: { [key: string]: string }) => el.id == product.id
  );
  if (alreadyExsist) {
  } else {
    store.userCart.push(product);
  }
};

const getCategory = (id: number) => {
  return store.categories[id];
};
</script>

<style lang="scss" scoped>
.mainPage {
  flex-grow: 1;

  &__loader {
    display: flex;
    justify-content: center;
  }

  &__products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;

    @include mdAndDown {
      grid-template-columns: repeat(2, 1fr);
    }

    @include smAndDown {
      grid-template-columns: repeat(2, 1fr);
    }

    @include xsAndDown {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__actions {
    display: flex;
    margin-top: 40px;

    .separator {
      flex-grow: 1;
    }
  }
}

// .list-move,
// .list-enter-active,
// .list-leave-active {
//   transition: all 0.3s ease;
// }

// .list-enter-from,
// .list-leave-to,
// .list-leave-from,
// .list-leave-active,
// .list-enter-active,
// .list-move {
//   opacity: 0;
//   transition: all 0.3s ease;
// }
</style>
