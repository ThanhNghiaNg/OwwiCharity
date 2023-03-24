import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import userRoutes from "./routes/user";
import { Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>{userRoutes}</Routes>
    </Layout>
  );
}

export default App;
