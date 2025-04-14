import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

AOS.init()

const app = createApp(App)

app
  .use(router)
  .use(PrimeVue, { theme: { preset: Aura } })
  .use(ToastService)
app.component('Toast', Toast)
app.mount('#app')
