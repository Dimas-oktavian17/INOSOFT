import { createApp } from 'vue'
import './css/output.css'
import App from './App.vue'
const app = createApp(App)
import productList from './components/productList.vue'
import shoopingCart from './components/shoopingCart.vue'
app
  .component('productList', productList)
  .component('shoopingCart', shoopingCart)
  
  app.mount("#app")