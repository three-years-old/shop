import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'
// vant 完全引入
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);
// 按需引入Vant
import { Button, NavBar, Icon, Toast ,Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Tab,Field,Tabs, Cell, CellGroup } from 'vant';
Vue.use(Button).use(Toast).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(Cell).use(CellGroup).use(Field);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
