// Import Pages here:
import Home from "./pages/Home";
import Testing from "./pages/Testing";
import Resume from "./pages/Resume";
import Details from "./pages/Details";
import Work from "./pages/Work";
import Blog from "./pages/Blog";

// Export them as paths here:

export default[
    {path: "/", name: "Home", component: Home},
    {path: "/testing", name: "Testing", component: Testing},
    {path: "/resume", name: "Resume", component: Resume},
    {path: "/blog", name: "Blog", component: Blog},
    {path: "/details", name: "Details", component: Details},
    {path: "/work", name: "Work", component: Work}
];