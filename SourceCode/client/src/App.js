import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import userRoutes from "./routes/user";
import { Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  return (
    <Layout>
      <Routes>{userRoutes}</Routes>
    </Layout>
  );
}

export default App;
