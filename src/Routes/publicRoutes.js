import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Services from "../Pages/Services";

export const publicRoutes = [
    {path: "/" , Component: Home, name: "Home"},
    {path: "/about" , Component: About, name: "About"},
    {path: "/login" , Component: Login, name: "Login"},
    {path: "/contact" , Component: Contact, name: "Contact"},
    {path: "/services" , Component: Services, name: "Services"},
] 