import { Vue, Component } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
    computed: {
        ...mapState(["cart"]),
    },
})
export default class Kasse extends Vue {
    public cart!: any;
    paymentMethod = "";
    shippingOption: any;

    shippingOptions = [
        {
            type: "standard",
            price: 0,
            label: "Standart",
            icon: "truck",
        },
        {
            type: "express",
            price: 4.99,
            label: "Express",
            icon: "shipping-fast",
        },
    ];

    public get totalSum() {
        let sum = 0;
        this.cart.forEach(item => {
            sum += item.price * item.quantity;
        });
        return sum.toFixed(2);
    }

    beforeMount() {
        this.shippingOption = this.shippingOptions[0];
        console.log(this.shippingOption);
    }
}
