import { createApp } from 'vue'
import { store, key} from '/@/store'
import router from '/@/router'
import App from '/@/App.vue'
import '/@/css/normalize.css'



createApp(App).use(store, key).use(router).mount('#app')
