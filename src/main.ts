import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

const myCustomLightTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#2A2634',
        surface: '#2A2634',
        primary: '#8B5CF6',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        'color-subtext': '#A1A1AA',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
        }
    },
})

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
