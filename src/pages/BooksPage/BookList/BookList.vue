<script setup lang="ts">
import { BOOKS, type Book, type BooksContext } from '@/domain/books'
import { BookListItem } from './BookListItem'
import { inject } from 'vue'

const { books, searchTerm } = inject<BooksContext>(BOOKS)!

const receivedRead = (book: Book) => {
  console.log('read', book)
  books.value = books.value!.map((book_) => {
    if (book_.isbn === book.isbn) {
      return {
        ...book_,
        read: true,
      }
    }
    return book_
  })
}
</script>
<template>
  <div>
    <form>
      <input placeholder="Search books" v-model="searchTerm" />
    </form>
    <div class="table-container">
      <table v-if="books && books.length > 0">
        <thead>
          <tr>
            <th>isbn</th>
            <th>title</th>
            <th>author</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="book in books" :key="book.isbn">
            <BookListItem :book="book" @read="receivedRead($event)" />
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
