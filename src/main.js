import Vue from 'vue'

import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

// Import main scss (bundler)
import '@/assets/style/index.scss'

// Import default layout to be able to declare it to Vue
// so we don't have to import it on every page
import DefaultLayout from '@/components/templates/Default.vue'

Vue.config.autoAddCss = false
Vue.config.productionTip = false

// Declare global components here
Vue.component('Layout', DefaultLayout)

new Vue({ router, store, vuetify, el: '#app', render: h => h(App) })
