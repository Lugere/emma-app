import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cart: [],
    },
    mutations: {
        pushToCart(state, value: any) {
            state.cart.push(value);
        },
        spliceFromCart(state, index) {
            if (index > -1) state.cart.splice(index, 1);
        },
        updateQuantity(state, value) {
            const { index, quantity } = value;
            state.cart[index].quantity = quantity;
        },
    },
    actions: {
        addToCart({ commit }, product) {
            product["quantity"] = 1;
            commit("pushToCart", product);
        },

        removeFromCart({ commit }, product) {
            const index = store.state.cart.indexOf(product);
            commit("spliceFromCart", index);
        },

        incrementQuantity({ commit }, product) {
            const index = store.state.cart.indexOf(product);
            const quantity = store.state.cart[index].quantity + 1;
            if (quantity === 0) commit("spliceFromCart", index);
            else commit("updateQuantity", { index, quantity });
        },

        decrementQuantity({ commit }, product) {
            const index = store.state.cart.indexOf(product);
            const quantity = store.state.cart[index].quantity - 1;
            if (quantity === 0) commit("spliceFromCart", index);
            else commit("updateQuantity", { index, quantity });
        },
    },
    modules: {},
});

export default store;
