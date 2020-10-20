/*
 * @Descripttion:
 * @version: 1.0
 * @Author: zzx
 * @Date: 2020-10-20 12:00:25
 * @LastEditors: zzx
 * @LastEditTime: 2020-10-20 15:29:54
 */
import Vue, { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
createApp(App).mount('#app')
