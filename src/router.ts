import { createRouter, createWebHistory } from 'vue-router'

import AboutPage from './pages/AboutPage.vue'
import BookDetailPage from './pages/BookDetailPage.vue'
import BooksPage from './pages/BooksPage/BooksPage.vue'
import { BookList } from './pages/BooksPage/BookList'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/books',
      component: BooksPage,
      name: 'books',
      children: [
        {
          path: ':isbn',
          component: BookDetailPage,
          name: 'book-detail',
          props: true,
        },
        {
          path: '',
          component: BookList,
          name: 'books-list',
        },
      ],
    },
    {
      path: '/about',
      component: AboutPage,
      name: 'about',
    },
    {
      path: '/',
      redirect: '/books',
    },
  ],
})
