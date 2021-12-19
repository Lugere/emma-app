import router from "@/router";
import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cart: [],
        address: {
            name: "",
            email: "",
            street: "",
            number: "",
            plz: "",
            city: "",
        },
        shippingOption: {
            type: "standard",
            price: 0,
            label: "Standard",
            icon: "truck",
        },
        paymentMethod: "paypal",
    },
    mutations: {
        setCart(state, value) {
            state.cart = value;
        },
        updateShippingOption(state, value) {
            state.shippingOption = value;
        },
        updatePaymentMethod(state, value) {
            state.paymentMethod = value;
        },
        updateAddress(state, address) {
            const { value, field } = address;
            state.address[field] = value;
        },
    },
    actions: {
        /**
         * Actions to Client
         */
        addToCart({ commit }, product) {
            product["quantity"] = 1;
            // localStorage used, because of easier access
            // but needs to be saved as string and parsed back again
            if (localStorage.cart) {
                const cart = JSON.parse(localStorage.cart);
                if (!cart.includes(product)) {
                    cart.push(product);
                    localStorage.cart = JSON.stringify(cart);
                }
            } else localStorage.cart = JSON.stringify([product]);
            // update cart in state
            commit("setCart", JSON.parse(localStorage.cart));
        },
        removeFromCart({ commit }, product) {
            const cart = JSON.parse(localStorage.cart);
            const index = cart.findIndex(_product => _product.prodId == product.prodId);
            if (index > -1) cart.splice(index, 1);
            localStorage.cart = JSON.stringify(cart);

            commit("setCart", JSON.parse(localStorage.cart));
        },
        updateQuantity({ dispatch, commit }, { product, operator }) {
            const cart = JSON.parse(localStorage.cart);
            const index = cart.findIndex(_product => _product.prodId == product.prodId);
            if (index > -1) {
                operator == "increment" ? cart[index].quantity++ : cart[index].quantity--;
                if (cart[index].quantity <= 0) dispatch("removeFromCart", cart[index]);
                localStorage.cart = JSON.stringify(cart);

                commit("setCart", JSON.parse(localStorage.cart));
            }
        },
        switchShippingOption({ commit }, option) {
            commit("updateShippingOption", option);
        },
        changePaymentMethod({ commit }, method) {
            commit("updatePaymentMethod", method);
        },
        /**
         * Actions to Server
         */
        async sendOrder({ commit }) {
            await Vue.axios
                .post(
                    "http://localhost/warko-ap/sendOrder.php",
                    {
                        address: this.state.address,
                        cart: localStorage.cart,
                    },
                    {
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                        },
                    },
                )
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.error(`Error sending order: ${e.message}`);
                });

            // await router.push("Store");
            // commit("setCart", []);
            // localStorage.cart = [];
        },
    },
    modules: {},
});

export default store;
