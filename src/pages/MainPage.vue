<template>
  <section class="mainPage">
    <ProductMainCard></ProductMainCard>
  </section>
</template>

<script setup lang="ts">
import ProductMainCard from "../components/base/ProductMainCard.vue";
</script>

<style lang="scss" scoped>
.mainPage {
  display: flex;
  flex-grow: 1;
}
</style>
