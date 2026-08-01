import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

const app = createApp(App)
const pinia = createPinia()

app.use(PrimeVue, {
  license: import.meta.env.VITE_PRIMEUI_LICENSE_KEY,
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark-mode',
    },
  },
})
app.use(pinia)

app.mount('#app')
