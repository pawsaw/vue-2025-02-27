<script setup lang="ts">
import { useBook, type Book } from '@/domain/books'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

interface Params {
  isbn: Book['isbn']
}

const isbn = ref<Book['isbn'] | null>(null)
const { book, loading } = useBook(isbn)

const route = useRoute()

onMounted(() => {
  isbn.value = (route.params as unknown as Params).isbn
})

watch(
  () => (route.params as unknown as Params).isbn,
  (newIsbn) => {
    isbn.value = newIsbn
  },
)
</script>
<template>
  <h2>ISBN: {{ isbn }}</h2>
  <div v-if="!loading">
    <h3>{{ book?.title }}</h3>
  </div>
</template>
