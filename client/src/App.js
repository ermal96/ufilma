import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Admin } from "./containers/Admin";
import Home from "./containers/Home";
import { routes } from "./routes";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path={routes.home}>
              <Home />
            </Route>

            <Route exact path={routes.admin}>
              <Admin />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
