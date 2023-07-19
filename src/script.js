import {products} from "./scripts/products.js";

Vue.createApp ({
  data() {
    return {
      items: products.items
    }
  }
}).mount('#app');