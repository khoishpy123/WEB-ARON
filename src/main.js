import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import 'primevue/resources/themes/aura-light-green/theme.css'
import en from '@/i18n/locales/en.json'
import vi from '@/i18n/locales/vi.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    messages: { en, vi },
    legacy: false
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(PrimeVue);
app.mount('#app')
