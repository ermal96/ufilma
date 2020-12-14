import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Dashboard, Login, Categories, Movies } from "./containers/Admin";
import Home from "./containers/Home";
import { routes } from "./routes";
import { useSelector } from "react-redux";

const App = () => {
  const loggedIn = useSelector((state) => state.auth.token);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          {/* admin routes */}
          <Route exact path={routes.admin}>
            {!loggedIn ? <Redirect to={routes.adminLogin} /> : <Dashboard />}
          </Route>
          <Route exact path={routes.adminLogin}>
            {loggedIn ? <Redirect to={routes.admin} /> : <Login />}
          </Route>
          <Route exact path={routes.adminCategories}>
            {!loggedIn ? <Redirect to={routes.adminLogin} /> : <Categories />}
          </Route>
          <Route exact path={routes.adminMovies} component={Movies}>
            {!loggedIn ? <Redirect to={routes.adminLogin} /> : <Movies />}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
