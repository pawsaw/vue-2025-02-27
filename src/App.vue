<script setup lang="ts">
import AppNavigation from './AppNavigation.vue'
import BooksProvider from './components/BooksProvider.vue'
</script>
<template>
  <BooksProvider>
    <AppNavigation />
    <RouterView />
  </BooksProvider>
</template>
