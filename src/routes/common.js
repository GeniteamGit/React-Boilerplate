import Login from "views/auth/Login";
import Home from "../views/common/Home";

const routes = [
    {
        path: "/home",
        name: "Home",
        icon: "fas fa-chart-line text-orange",
        component: Home,
        layout: "/dashboard",
        display: true,
    },
    {
        path: "/login",
        name: "Login",
        icon: "N/A",
        component: Login,
        layout: "/auth",
        display: false,
    }
];

export default routes;