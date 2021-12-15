import store from "@/store";
import { Vue, Component } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
    computed: {
        ...mapState(["cart"]),
    },
})
export default class Store extends Vue {
    public cart!: any;

    public getImageUrl(imageName: string) {
        const images = require.context(`../assets/image/products`, false, /\.jpg$/);
        return images("./" + imageName);
    }

    public addToCart(prodId: any) {
        store.dispatch(
            "addToCart",
            this.products.find(x => x.prodId == prodId),
        );
    }

    public removeFromCart(prodId: any) {
        store.dispatch(
            "removeFromCart",
            this.products.find(product => product.prodId == prodId),
        );
    }

    public isInCart(prodId) {
        return this.cart.find(product => product.prodId == prodId);
    }

    products = [
        {
            prodId: 1,
            price: 118.99,
            desc: "Nike Force One",
            imgName: "nike.jpg",
        },
        {
            prodId: 2,
            price: 89.99,
            desc: "JBL Tune 500B",
            imgName: "headset.jpg",
        },
        {
            prodId: 3,
            price: 1.79,
            desc: "Canada Dry 250ml",
            imgName: "soda.jpg",
        },
        {
            prodId: 4,
            price: 44.89,
            desc: "Modell Auto 1958",
            imgName: "model-car.jpg",
        },
        {
            prodId: 5,
            price: 55.99,
            desc: "Xbox Controller",
            imgName: "gamepad.jpg",
        },
        {
            prodId: 6,
            price: 489.99,
            desc: "Louis XVI",
            imgName: "wrist-watch.jpg",
        },
        {
            prodId: 7,
            price: 245.99,
            desc: "Amazon Echo Dot",
            imgName: "echo-dot.jpg",
        },
    ];
}
