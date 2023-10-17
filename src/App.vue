<template>
  <nav class="navbar">
    <div class="navbar__wrapper">
      <img src="/logo.svg" @click="$router.push({ name: 'Home' })" />
      <ul>
        <li v-for="item in navList" :key="item.name">
          <RouterLink :to="item.link">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <Component :is="Component"></Component>
      </Transition>
    </RouterView>
  </main>
</template>

<script setup lang="ts">
import { useParpaStore } from "../src/store/store";

const store = useParpaStore();
store.getProductsList();

const navList = [
  { name: "Главная", link: "/" },
  { name: "Корзина", link: "/cart" },
];
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  position: relative;
}
</style>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 1000;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    padding: 0 20px;

    img {
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    gap: 24px;
    padding: 0;
    margin: 0;

    li {
      list-style-type: none;

      a {
        text-decoration: none;
        color: black;

        &.router-link-active {
          color: rgba(186, 150, 125, 1);
        }
      }
    }
  }
}

main {
  display: flex;
  flex-grow: 1;
  padding-top: 100px;
}

section {
  padding: 0 20px;
  padding-bottom: 20px;
}

@include xl {
  .navbar__wrapper,
  section {
    margin: 0 auto;
    max-width: 1300px;
  }
}

@include md {
  .navbar__wrapper,
  section {
    margin: 0 auto;
    max-width: 992px;
  }
}

@include sm {
  .navbar__wrapper,
  section {
    margin: 0 auto;
    max-width: 768px;
  }
}

@include xs {
  .navbar__wrapper,
  section {
    margin: 0 auto;
    max-width: 576px;
  }
}

//Transition
.fade-enter-to,
.fade-leave-from {
  transition: opacity 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
