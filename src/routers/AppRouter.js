import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import ExpensifyDashboardPage from "../components/ExpensifyDashboardPage";
import EditExpensePage from "../components/EditExpensePage";
import LoginPage from "../components/LoginPage";

const AppRouter = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default AppRouter;
