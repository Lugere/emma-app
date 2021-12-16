import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "../views/Main.vue";
import Store from "../views/Store.vue";
import Warenkorb from "../views/Warenkorb.vue";
import Kasse from "../views/Kasse.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "*",
        redirect: "Store",
    },
    {
        path: "/",
        name: "Main",
        component: Main,
        redirect: "Store",
        children: [
            {
                path: "/Store",
                name: "Store",
                meta: {
                    name: "store",
                },
                component: Store,
            },
            {
                path: "/Warenkorb",
                name: "Warenkorb",
                meta: {
                  name: "cart"
                },
                component: Warenkorb
            },
            {
                path: "/Kasse",
                name: "Kasse",
                meta: {
                  name: "checkout"
                },
                component: Kasse
            },
        ],
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
});

// router.beforeEach((to, from, next) => {
//     if (to.fullPath == "/Kasse" && store.state.cart.length > 0) next("Kasse");
//     else if (from)
//         if (to.fullPath == from.fullPath) next(from.fullPath);
//     else next("Store");

//     next();
// })

export default router;
