import { useContext } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { MainBookPage } from "./components/pages/MainBookPage";
import { MyBooksPage } from "./components/pages/MyBooksPage";
import { Layout } from "./components/layout/Layout";
import { Login } from "./components/userAccount/Login";
import { Register } from "./components/userAccount/Register";
import AuthContext, { AuthProvider } from "./store/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.currentUser;

  return (
    <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<MainBookPage />} />
            <Route path="/mybooks" 
            element={isLoggedIn ? <MyBooksPage /> : <Navigate replace to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
