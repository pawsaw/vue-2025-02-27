<script setup lang="ts">
import { type Book } from '@/domain/books'
import { onMounted, watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import type { GetBookByIsbnQuery, GetBookByIsbnQueryVariables } from '@/gql/graphql'

const GetBookByIsbn = gql`
  query GetBookByIsbn($isbn: String!) {
    book(isbn: $isbn) {
      title
    }
  }
`

const props = defineProps<{
  isbn: Book['isbn']
}>()

const { result, loading, refetch } = useQuery<GetBookByIsbnQuery, GetBookByIsbnQueryVariables>(GetBookByIsbn, {
  isbn: props.isbn
})


onMounted(() => {
})

watch(
  () => props.isbn,
  (newIsbn) => {
    refetch({ isbn: newIsbn})
  },
)
</script>
<template>
  <h2>ISBN: {{ isbn }}</h2>
  <div v-if="!loading">
    <h3>{{ result?.book.title }}</h3>
  </div>
</template>
