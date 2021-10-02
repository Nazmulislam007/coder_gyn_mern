import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Shared/Navigation/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
