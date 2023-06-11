import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueEcharts from 'vue-echarts'
import 'echarts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
const app = createApp(App)
axios.defaults.baseURL = 'http://localhost:9090' //后端地址
app.provide('$axios', axios)

app.use(router).component('v-chart', VueEcharts).use(ElementPlus).mount('#app')

