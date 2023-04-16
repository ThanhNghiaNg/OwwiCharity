import { Route } from "react-router-dom";
import Projects from "../pages/Projects";
import CreateProject from "../pages/CreateProject";
import UpdateProject from "../pages/UpdateProject";
import Users from "../pages/Users";
import News from "../pages/News";
import Transactions from "../pages/Transactions";

const items = [
  {
    path: "/project/create",
    element: <CreateProject />,
    name: "Create Project",
  },
  {
    path: "/project/edit/:id",
    element: <UpdateProject />,
    name: "Edit Project",
  },
  {
    path: "/projects",
    element: <Projects />,
    name: "Projects",
  },
  {
    path: "/transactions",
    element: <Transactions />,
    name: "Transactions",
  },
  {
    path: "/users",
    element: <Users />,
    name: "Users",
  },
  {
    path: "/news",
    element: <News />,
    name: "News",
  },
  { path: "*", element: <p>test</p>, name: "other" },
];
const adminRoutes = items.map((item) => {
  return <Route path={item.path} element={item.element} key={item.name} />;
});

export default adminRoutes;
