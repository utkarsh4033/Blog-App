
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function app() {
    const currentUser = true; 
    return (
        <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Home />
          </Route>
          <Route path="/register">
            {currentUser ? <Home /> : <Register />}
          </Route>
          <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
          <Route path="/post/:id">
            <Single />
          </Route>
          <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
          <Route path="/settings">
            {currentUser ? <Settings /> : <Login />}
          </Route>
        </Switch>
      </Router>
    );
}
export default app;

