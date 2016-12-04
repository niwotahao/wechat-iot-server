import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './page/app.vue';
import VueRouter from 'vue-router';
import Product from './page/product.vue';
import VueResource from 'vue-resource'


Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    path:'/product',
    component: Product
  }
];
const router = new VueRouter({routes});
new Vue({
  el:'#app',
  router,
  render:h => h(App)
})
