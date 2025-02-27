<script setup lang="ts">
import { exampleNavigation, type Navigation } from '@/domain/navigation'
import logo from '@/assets/logo.png'
import { ref } from 'vue'

const name = ref('Bookm')

const navigation = ref<Navigation[]>(exampleNavigation)
</script>
<template>
  <h2>{{ name }}</h2>
  <nav>
    <img :class="['logo']" :src="logo" alt="Bild" />
    <ul>
      <li>
        <RouterLink active-class="active" :to="navigation[0].link">{{
          navigation[0].label
        }}</RouterLink>
      </li>
      <li>
        <RouterLink active-class="active" :to="navigation[1].link">{{
          navigation[1].label
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
}

.active {
  text-decoration: underline;
  font-weight: 900;
}

.logo {
  width: 60px;
  height: 60px;
}
</style>
