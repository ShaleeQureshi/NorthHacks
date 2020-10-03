import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";

// Importing Views
import HomeApp from "../views/HomeApp";
import RegisterApp from "../views/RegisterApp";
import LoginApp from "../views/LoginApp";
import ProfileApp from "../views/ProfileApp";

// Importing essential scripts
import { AuthProvider } from "./firebase/auth";
import PrivateRoute from "./privare-route";

function App() {
  return (
    <AuthProvider>
      <HashRouter basename="/NorthHacks/">
        <Switch>
          <Route path={["/", "/home"]} exact component={HomeApp} />
          <Route
            path={["/register", "/signup", "/sign-up"]}
            exact
            component={RegisterApp}
          />
          <Route
            path={["/login", "/signin", "/sign-in"]}
            exact
            component={LoginApp}
          />
          <PrivateRoute path="/profile" exact component={ProfileApp} />
        </Switch>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
