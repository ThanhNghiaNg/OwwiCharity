import Home from "../pages/Home";
import News from "../pages/News";
import Projects from '../pages/Projects'
import ProjectDetail from '../pages/ProjectDetail'
import Partners from '../pages/Partners'
import PartnerDetail from "../pages/PartnerDetail";
import UserProfile from '../pages/UserProfile'
import { Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/partner/detail/:id",
    element: <PartnerDetail />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/project/detail/:id",
    element: <ProjectDetail />,
  },
  {
    path: "/user",
    element: <UserProfile />,
  },
];


const publicRoutes = routes.map((route) => (
  <Route key={new Date().getTime()} path={route.path} element={route.element} />
));

export default publicRoutes;