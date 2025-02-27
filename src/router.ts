import { createRouter, createWebHistory } from 'vue-router'
import { BookList } from './pages/BookList'
import AboutPage from './pages/AboutPage.vue'
import BookDetailPage from './pages/BookDetailPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/books/:isbn',
      component: BookDetailPage,
      name: 'book-detail',
    },
    {
      path: '/books',
      component: BookList,
      name: 'books',
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
