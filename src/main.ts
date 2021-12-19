import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import Axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// only needed for form validation
import { Form } from "element-ui";
Vue.use(Form);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
