import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { MainBookPage } from "./components/books/MainBookPage";
import { Layout } from "./components/layout/Layout";
import { Login } from "./components/userAccount/Login";
import { Register } from "./components/userAccount/Register";

function App() {
  return (
    <div className="App">
     
        <Layout>
          <Routes>
            <Route path="/" element={<MainBookPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
    
    </div>
  );
}

export default App;
