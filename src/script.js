import {products} from "./scripts/products.js";

Vue.createApp ({
  data() {
    return {
      popularOnly: false,
      items: products.items
    }
  },
  computed: {
    showItems() {
      return this.items.filter(item => this.popularOnly ? item.popular : item)
    }
  },
}).mount('#app');