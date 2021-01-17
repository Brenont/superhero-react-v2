import { BrowserRouter, Switch, Route } from "react-router-dom";
import Biography from "./Biography";
import Home from "./Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/bio" exact>
          <Biography />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
