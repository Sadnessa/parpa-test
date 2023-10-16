<template>
  <nav class="navbar">
    <img src="/logo.svg" />
    <ul>
      <li v-for="item in navList" :key="item.name">
        <RouterLink :to="item.link">{{ item.name }}</RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { useParpaStore } from "../src/store/store";
const store = useParpaStore();
console.log(store);
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
  padding: 0 100px;
}
</style>

<style lang="scss" scoped>
.navbar {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 24px;
    padding: 0;
    margin: 0;

    li {
      list-style-type: none;

      a {
        text-decoration: none;

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
}
</style>
