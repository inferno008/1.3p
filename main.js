import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import home from './views/home.vue'
import priceList from './views/priceList.vue'
import contact from './views/contact.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/priceList',
      component: priceList
    },
    {
      path: '/contact',
      component: contact
    }
  ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')

