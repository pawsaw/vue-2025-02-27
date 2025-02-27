import type { Book } from './Book'

export const fetchBooks = async (
  url = `http://localhost:4730/books?_start=0&_end=50`,
): Promise<Book[]> => {
  const response = await fetch(url)
  return response.json()
}

export const searchBooks = async (
  searchTerm: string,
  url = `http://localhost:4730/books`,
): Promise<Book[]> => {
  const response = await fetch(`${url}?q=${encodeURIComponent(searchTerm)}`)
  return response.json()
}

export const fetchBook = async (
  isbn: Book['isbn'],
  baseUrl = `http://localhost:4730/books`,
): Promise<Book> => {
  const response = await fetch(`${baseUrl}/${isbn}`)
  return response.json()
}
