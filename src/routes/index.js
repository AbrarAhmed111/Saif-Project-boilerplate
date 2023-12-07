import Login from "../views/auth/Login";
import Dashboard from "../views/Dashboard";
import Train from "../views/Train";
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
	{
        path: "/train",
        component: Train,
        layout: "main",
    },
];
export default routes;
