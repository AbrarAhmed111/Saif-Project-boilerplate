import Login from "../views/auth/Login";
import Dashboard from "../views/Dashboard";

let routes = [
    {
        path: "/",
        component: Login,
        layout: "auth",
    },
    {
        path: "/dashboard",
        component: Dashboard,
        layout: "main",
    },
];
export default routes;
