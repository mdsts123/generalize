import Vue from 'vue'
const iView =require('iview')
import { Button,Table,Modal,Input} from 'iview'
Vue.use(iView)
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Modal', Modal)
Vue.component('Input', Input)
Vue.prototype.$Modal = Modal

// console.log(iview);

import 'iview/dist/styles/iview.css'
