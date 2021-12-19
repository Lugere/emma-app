import { Vue, Component, Watch } from "vue-property-decorator";
import { mapState } from "vuex";
import store from "@/store";

@Component({
    computed: {
        ...mapState(["cart", "products"]),
    },
})
export default class Store extends Vue {
    public cart!: any;
    public products!: any;

    public getImageUrl(imageName: string) {
        const images = require.context(`../assets/image/products`, false, /\.jpg$/);
        return images("./" + imageName);
    }

    public addToCart(product: any) {
        store.dispatch("addToCart", product);
    }

    public removeFromCart(product: any) {
        store.dispatch("removeFromCart", product);
    }

    public isInCart(product) {
        return this.cart.find(_product => _product.prodId == product.prodId);
    }
}
