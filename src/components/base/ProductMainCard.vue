<template>
  <div class="productMainCard">
    <div class="productMainCard__image">
      <img :src="props.image" />
    </div>
    <div class="productMainCard__info">
      <div class="productInfoSection">
        <div class="productName">
          {{ props.productName }}
        </div>
        <div class="productDescription">
          {{ props.productDescriotion }}
        </div>
      </div>

      <div class="productPriceSection">
        <div class="productPriceSection__price">{{ props.productPrice }} ₽</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    default: () => "/product_img.png",
  },

  productName: {
    type: String,
    default: "Kekw",
  },

  productDescriotion: {
    type: String,
    default: "Me",
  },

  productPrice: {
    type: Number,
    default: 31209321031,
  },
});
</script>

<style lang="scss" scoped>
.productMainCard {
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  height: 450px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &__image {
    max-height: 280px;

    img {
      height: 280px;
    }
  }

  &__info {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
