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
          {{ props.productDescription }}
        </div>
      </div>

      <div class="productPriceSection">
        <div class="productPriceSection__price">{{ props.productPrice }} ₽</div>
        <CustomButton
          flat
          padding="4px 6px"
          @click="$emit('cartClick')"
          rounded
        >
          <img src="/basket.svg" />
        </CustomButton>
      </div>
    </div>
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

const emits = defineEmits(["cartClick"]);
</script>

<style lang="scss" scoped>
.productMainCard {
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &__image {
    img {
      width: 100%;
    }
  }

  &__info {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .productInfoSection {
      flex-grow: 1;
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
      align-items: center;
      margin-top: 60px;
    }
  }
}
</style>
