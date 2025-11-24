<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import TodoList from '@/components/todoList/TodoList.vue';

</script>

<template>
  <AppHeader />
  <main class="w-full max-w-xl mt-8 bg-slate-200 rounded-xl">
    <TodoList apiURL="https://68ad9563a0b85b2f2cf3e290.mockapi.io/" />
  </main>
  <AppFooter />
</template>

<style scoped>

</style>
