import { Switch, Route } from "react-router-dom";
import Desafios from "../Pages/Desafios";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Desafios} />
    </Switch>
  );
};

export default Routes;
