import Vue from "vue";
import Router from "vue-router";
import ProductsView from "../components/ProductsView";
import ProductView from "../components/ProductView";
import compare from "../components/compare";
import FromModifInfoGame from "../components/FromModifInfoGame";
import user from "../components/user";
import edit from "../components/edit";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "ProductsView",
            component: ProductsView
        },
        {
            path: "/product/:id",
            name: "ProductView",
            component: ProductView
        },
        {
            path: "/product/:id/modif",
            name: "FromModifInfoGame",
            component: FromModifInfoGame
        },
        {
            path: "/compare/:idJ1/:idJ2",
            name: "compare",
            component: compare
        },
        {
            path: "/profile/:id",
            name: "user",
            component: user
        },
        {
            path: "/edit/:id/:param",
            name: "edit",
            component: edit
        }
    ]
});
