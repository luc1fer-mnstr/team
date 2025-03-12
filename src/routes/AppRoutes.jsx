import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Members from "../pages/Members";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Portfolio from "../components/Portfolio";

const AppRoutes = () => {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/members", element: <Members /> },
        { path: "/services", element: <Services /> },
        { path: "/contact", element: <Contact /> },
        { path: "/portfolio", element: <Portfolio /> },
    ]);
};

export default AppRoutes;
