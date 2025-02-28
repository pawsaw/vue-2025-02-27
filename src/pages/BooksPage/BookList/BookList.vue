<script setup lang="ts">
import gql from 'graphql-tag';
import { BookListItem } from './BookListItem'
import { useQuery } from '@vue/apollo-composable';
import { type GetBooksBySearchTermQuery, type GetBooksBySearchTermQueryVariables } from '@/gql/graphql';

const GetBooksBySearchTerm = gql`
  query GetBooksBySearchTerm($searchTerm: String) {
    books(searchTerm: $searchTerm) {
      isbn
      title
      author {
        fullName
      }
    }
  }
`

const { variables, result } = useQuery<GetBooksBySearchTermQuery, GetBooksBySearchTermQueryVariables>(GetBooksBySearchTerm, {
  searchTerm: ''
})


</script>
<template>
  <div>
    <form v-if="variables?.searchTerm !== undefined">
      <input placeholder="Search books" v-model="variables.searchTerm" />
    </form>
    <div class="table-container">
      <table v-if="result?.books.length ?? 0">
        <thead>
          <tr>
            <th>isbn</th>
            <th>title</th>
            <th>author</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="book in result?.books" :key="book.isbn">
            <BookListItem :book="book"/>
          </template>
        </tbody>
      </table>
      <div v-else>No books. Load first</div>
    </div>
  </div>
</template>
<style scoped>
.table-container {
  height: 80vh;
  overflow-y: scroll;
}
</style>
