import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import Partners from "../pages/Partners";
import PartnerDetail from "../pages/PartnerDetail";
import { Route } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
import DonatePage from "../pages/DonatePage";

const routes = [
  {
    path: "/",
    element: <Home />,
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
    path: "/login",
    element: <AuthForm isLogin={true} />,
  },
  {
    path: "/register",
    element: <AuthForm isLogin={false} />,
  },
  {
    path: "/donation/:projectId",
    element: <DonatePage />,
  },
];

const publicRoutes = routes.map((route) => (
  <Route key={new Date().getTime()} path={route.path} element={route.element} />
));

export default publicRoutes;
