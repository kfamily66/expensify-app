import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import AddExpensePage from "../components/AddExpensePage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import ExpensifyDashboardPage from "../components/ExpensifyDashboardPage";
import EditExpensePage from "../components/EditExpensePage";
import LoginPage from "../components/LoginPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={null} exact={true} />
        <Route component={Header} />
      </Switch>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={ExpensifyDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
