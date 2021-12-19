import store from "@/store";
import { Vue, Component, Watch } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
    computed: {
        ...mapState(["cart"]),
    },
})
export default class Store extends Vue {
    public cart!: any;

    products = [
        {
            prodId: 1,
            desc: "Nike Force One",
            price: 118.99,
            imgName: "nike.jpg",
        },
        {
            prodId: 2,
            desc: "JBL Tune 500B",
            price: 89.99,
            imgName: "headset.jpg",
        },
        {
            prodId: 3,
            desc: "Canada Dry 250ml",
            price: 1.79,
            imgName: "soda.jpg",
        },
        {
            prodId: 4,
            desc: "Modell Auto 1958",
            price: 44.89,
            imgName: "model-car.jpg",
        },
        {
            prodId: 5,
            desc: "Xbox Controller",
            price: 55.99,
            imgName: "gamepad.jpg",
        },
        {
            prodId: 6,
            desc: "Louis XVI",
            price: 489.99,
            imgName: "wrist-watch.jpg",
        },
        {
            prodId: 7,
            desc: "Amazon Echo Dot",
            price: 245.99,
            imgName: "echo-dot.jpg",
        },
        {
            prodId: 8,
            desc: "iPhone 11",
            price: 899.99,
            imgName: "phone.jpg",
        },
        {
            prodId: 9,
            desc: "Monster Energy",
            price: 1.29,
            imgName: "monster.jpg",
        },
        {
            prodId: 10,
            desc: "Zauberwürfel",
            price: 6.99,
            imgName: "cube.jpg",
        },
        {
            prodId: 11,
            desc: "18K Rolex",
            price: 9999.99,
            imgName: "rolex.jpg",
        },
        {
            prodId: 12,
            desc: "Macbook Pro 2021",
            price: 1699,
            imgName: "macbook.jpg",
        },
        {
            prodId: 13,
            desc: "Stradivari",
            price: 289000,
            imgName: "violin.jpg",
        },
    ];

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
