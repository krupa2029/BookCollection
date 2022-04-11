import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import { MainBookPage } from "./components/books/MainBookPage";
import { Layout } from "./components/layout/Layout";
import { Login } from "./components/userAccount/Login";
import { Register } from "./components/userAccount/Register";


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
        <Router>
          <Route path="/mybooks">
            <MainBookPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          </Router>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
