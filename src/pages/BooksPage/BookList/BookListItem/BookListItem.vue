<script setup lang="ts">
import type { GetBooksBySearchTermQuery } from '@/gql/graphql';
import { computed } from 'vue';

interface Props {
  book: GetBooksBySearchTermQuery['books'][number]
}

const props = defineProps<Props>()

const author = computed(() => props.book.author.map(a => a.fullName).join(', '))

</script>
<template>
  <tr>
    <td>
      <RouterLink :to="{ name: 'book-detail', params: { isbn: book.isbn } }">{{
        book.isbn
      }}</RouterLink>
    </td>
    <td>{{ book.title }}</td>
    <td>{{ author }}</td>
  </tr>
</template>
