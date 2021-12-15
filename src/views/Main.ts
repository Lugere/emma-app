import router from "@/router";
import { Vue, Component } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
    computed: {
        ...mapState(["cart"]),
    },
})
export default class Main extends Vue {
    public cart!: any;

    public checkRoute(route): boolean {
        return route === router.currentRoute.fullPath;
    }

    public previousStep(): void {
        switch(router.currentRoute.fullPath) {
            case "/Store":
                break;
            case "/Warenkorb":
                router.push("Store");
                break;
            case "/Kasse":
                router.push("Warenkorb");
                break;
        }
    }

    public nextStep(): void {
        switch(router.currentRoute.fullPath) {
            case "/Store":
                router.push("Warenkorb");
                break;
            case "/Warenkorb":
                router.push("Kasse");
                break;
            case "/Kasse":
                break;
        }
    }

    public get cartCount(): number {
        return this.cart.length;
    }
}
