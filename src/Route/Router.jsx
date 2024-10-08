import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Team from "../Pages/Team/Team";
import Blog from "../Pages/Blog/Blog";
import Contacts from "../Pages/Contacts/Contact";
import SingleBlog from "../Pages/Blog/SingleBlog";

const router = createBrowserRouter([
    {
        element : <Layouts/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path : "/about",
                element : <About/>,
            },
            {
                path : "/team",
                element : <Team/>,
            },
            {
                path : "/blog",
                element : <Blog/>,
            },
            {
                path : "/contact",
                element : <Contacts/>,
            },
            {
                path : "/blog/:postId",
                element : <SingleBlog/>,
            },

        ],
    },
]);

export default router;