import type { Ref } from 'vue'
import type { Book } from './Book'

export interface BooksContext {
  books: Ref<Book[] | null>
  loading: Ref<boolean>
  searchTerm: Ref<string>

  findByISBN: (isbn: Book['isbn']) => Book | null
}

export const BOOKS = Symbol('books')
