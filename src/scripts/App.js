import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

// Importing Views
import HomeApp from "../views/HomeApp";
import RegisterApp from "../views/RegisterApp";
import ProfileApp from "../views/ProfileApp";
import NotFoundApp from "../views/404NotFound";

// Importing essential scripts
import { AuthProvider } from "./firebase/auth";
import PrivateRoute from "./privare-route";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <Route path={["/", "/home"]} exact component={HomeApp} />
          <Route
            path={["/register", "signup", "sign-up"]}
            exact
            component={RegisterApp}
          />
          <PrivateRoute path="/profile" exact component={ProfileApp} />
          <Route component={NotFoundApp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
