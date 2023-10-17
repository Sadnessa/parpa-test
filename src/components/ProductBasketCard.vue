<template>
  <div class="productBasketCard">
    <div class="productBasketCard__image">
      <img :src="props.image" />
    </div>
    <div class="productBasketCard__info">
      <div class="productInfoSection">
        <div class="productName">
          {{ props.productName }}
        </div>
        <div class="productDescription">
          {{ props.productDescription }}
        </div>
      </div>

      <div class="productPriceSection">
        <div class="productPriceSection__price">{{ props.productPrice }} ₽</div>
      </div>
    </div>
    <CustomButton flat padding="4px" @click="$emit('closeClick')" rounded>
      <img src="/close.svg" />
    </CustomButton>
  </div>
</template>

<script setup lang="ts">
import CustomButton from "./base/CustomButton.vue";

const props = defineProps({
  image: {
    type: String,
    default: () => "/product_img.png",
  },

  productName: {
    type: String,
    default: "Kekw",
  },

  productDescription: {
    type: String,
    default: "Me",
  },

  productPrice: {
    type: Number,
    default: 31209321031,
  },
});

const emits = defineEmits(["closeClick"]);
</script>

<style lang="scss" scoped>
.productBasketCard {
  display: flex;
  position: relative;
  height: 200px;
  max-width: 500px;

  &__image {
    max-height: 200px;

    img {
      height: 200px;
    }
  }

  &__info {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .productInfoSection {
      .productName {
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
      }

      .productDescription {
        font-size: 14px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        color: rgba(51, 51, 51, 0.5);
      }
    }

    .productPriceSection {
      display: flex;
      justify-content: space-between;
    }
  }

  button {
    position: absolute;
    right: 0;
  }
}
</style>
