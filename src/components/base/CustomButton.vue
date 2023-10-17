<template>
  <button
    class="customButton"
    :style="computeStyle"
    :class="computeClass"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "#6A6A6A",
  },

  background: {
    type: String,
    default: "white",
  },

  flat: {
    type: Boolean,
    default: false,
  },

  padding: {
    type: String,
    default: "3px 18px",
  },

  disabled: {
    type: Boolean,
  },

  rounded: {
    type: Boolean,
    default: false,
  },
});

const computeStyle = computed(() => {
  return {
    color: props.color,
    background: props.background,
    padding: props.padding,
  };
});

const computeClass = computed(() => {
  return { shadowed: !props.flat, round: props.rounded };
});
</script>

<style lang="scss" scoped>
button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: all ease 0.3ms;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0;
    transition: all ease 0.3s;
  }

  &:hover {
    &::after {
      opacity: 0.1;
      transition: all ease 0.3s;
    }
  }

  &.shadowed {
    box-shadow: 0px 4px 4px 0px #00000040;
  }

  &.round {
    border-radius: 100px;
  }
}
</style>
