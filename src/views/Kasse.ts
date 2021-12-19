import store from "@/store";
import { Vue, Component } from "vue-property-decorator";
import { mapState } from "vuex";
import moment from "moment";
moment.locale("de");
moment().day("Monday");

@Component({
    computed: {
        ...mapState(["cart", "address", "shippingOption", "paymentMethod"]),
    },
})
export default class Kasse extends Vue {
    public cart!: any;
    public address!: any;
    public shippingOption!: any;
    public paymentMethod!: any;

    shippingOptions = [
        {
            type: "standard",
            price: 0,
            label: "Standard",
            icon: "truck",
        },
        {
            type: "express",
            price: 4.99,
            label: "Express",
            icon: "shipping-fast",
        },
    ];

    public switchShippingOption(option: any) {
        store.dispatch("switchShippingOption", option);
    }
    public changePaymentMethod(method: any) {
        store.dispatch("changePaymentMethod", method);
    }

    public updateAddress(value, field) {
        store.commit("updateAddress", { value, field });
    }

    public get totalSum() {
        let sum = 0;
        this.cart.forEach(item => {
            sum += item.price * item.quantity;
        });
        return (sum + this.shippingOption.price).toFixed(2);
    }

    public validate(formName) {
        this.$refs[formName].validate((valid: any) => {
            if (valid) console.log("valid");
            else {
                console.log("invalid");
                return false;
            }
        });
    }

    public get deliveryDate() {
        let days = 5;
        if (this.shippingOption.type == "express") days = 2;

        // if delivery-date falls on sunday
        if (moment().add(days, "days").format("d") == "0") days++;

        return moment().add(days, "days").format("dddd, DD. MMMM");
    }
}
