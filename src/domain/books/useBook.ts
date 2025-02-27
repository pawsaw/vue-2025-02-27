import { ref, computed, watch, type Ref } from 'vue'
import { fetchBook } from './api'
import type { Book } from './Book'

export const useBook = (isbn: Ref<Book['isbn'] | null>) => {
  const book = ref<Book | null>(null)
  const loading = computed(() => book.value === null)

  watch(isbn, async (newIsbn, oldIsbn) => {
    if (newIsbn && newIsbn !== oldIsbn) {
      book.value = await fetchBook(newIsbn)
    }
  })

  return {
    book,
    loading,
  }
}
