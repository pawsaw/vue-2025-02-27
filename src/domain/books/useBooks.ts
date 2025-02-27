import { watchDebounced } from '@vueuse/core'
import { ref, onMounted, computed, type Ref } from 'vue'
import { fetchBooks, searchBooks } from './api'
import type { Book } from './Book'

export interface UseBooksResult {
  books: Ref<Book[] | null>
  searchTerm: Ref<string>
  loading: Ref<boolean>
}

export const useBooks = (url: string): UseBooksResult => {
  const books = ref<Book[] | null>(null) // Full data set
  const searchTerm = ref('')
  const loading = computed(() => books.value === null)

  onMounted(async () => {
    books.value = await fetchBooks(url)
  })

  watchDebounced(
    searchTerm,
    async (searchTerm) => {
      books.value = await searchBooks(searchTerm, url)
    },
    {
      debounce: 1000,
    },
  )

  return {
    books,
    searchTerm,
    loading,
  }
}
