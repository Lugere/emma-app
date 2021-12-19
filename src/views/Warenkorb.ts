import store from "@/store";
import { Vue, Component, Watch } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
    computed: {
        ...mapState(["cart"]),
    },
})
export default class Warenkorb extends Vue {
    public cart!: any;

    public getImageUrl(imageName: string) {
        const images = require.context(`../assets/image/products`, false, /\.jpg$/);
        return images("./" + imageName);
    }

    public get total(): string {
        let sum = 0;
        this.cart.forEach(item => {
            sum += item.price * item.quantity;
        });
        return sum.toFixed(2);
    }

    public updateQuantity(product, operator) {
        store.dispatch("updateQuantity", { product, operator });
    }

    public removeFromCart(product) {
        store.dispatch("removeFromCart", product);
    }
}
