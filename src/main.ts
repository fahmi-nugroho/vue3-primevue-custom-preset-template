import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/css/main.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import MyPreset from './utils/primevuePreset'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
})

app.mount('#app')
