import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apolloClient'

const app = createApp(App)
const store = createPinia()
app.provide(DefaultApolloClient, apolloClient)
app.use(store)
app.use(router)
app.mount('#app')
