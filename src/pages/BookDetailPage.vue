<script setup lang="ts">
import { BOOKS, type BooksContext, type Book } from '@/domain/books'
import { inject, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  isbn: Book['isbn']
}>()

const book = ref<Book | null>(null)
const { findByISBN, loading } = inject<BooksContext>(BOOKS)!
onMounted(() => {
  book.value = findByISBN(props.isbn)
})

watch(
  () => props.isbn,
  (newIsbn) => {
    book.value = findByISBN(newIsbn)
  },
)
</script>
<template>
  <h2>ISBN: {{ isbn }}</h2>
  <div v-if="!loading">
    <h3>{{ book?.title }}</h3>
  </div>
</template>
