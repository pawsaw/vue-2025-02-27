<script setup lang="ts">
import { BOOKS, useBooks, type BooksContext } from '@/domain/books'
import { provide } from 'vue'

const { books, loading, searchTerm } = useBooks('http://localhost:4730/books')

provide<BooksContext>(BOOKS, {
  books,
  loading,
  searchTerm,
  findByISBN: (isbn: string) => books.value?.find((book) => book.isbn === isbn) ?? null,
})
</script>
<template>
  <slot></slot>
</template>
