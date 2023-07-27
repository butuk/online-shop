import {products} from "./scripts/products.js";

Vue.createApp ({
  data() {
    return {
      popularOnly: false,
      size: [],
      type: [],
      color: [],
      creator: [],
      items: products.items,
    }
  },
  computed: {
    showItems() {
      return this.items
        .filter(item => name ? item.name.toLowerCase() === this.name.toLowerCase() : item)
        .filter(item => this.popularOnly ? item.popular : item)
        .filter(item => this.size.length >= 1 ? this.size.includes(item.size) : item)
        .filter(item => this.type.length >= 1 ? this.type.includes(item.type) : item)
        .filter(item => this.color.length >= 1 ? this.color.includes(item.color) : item)
        .filter(item => this.creator.length >= 1 ? this.creator.includes(item.creator.toLowerCase()) : item)
    }
  },
}).mount('#app');

