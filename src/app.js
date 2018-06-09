import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css";
import "./styles/style.scss";

const ExpensifyDashboardPage = () => <div>This is a dashboard!</div>;
const AddExpensePage = () => <div>This is a create page!</div>;
const HelpPage = () => <div>This is a help page!</div>;
const EditExpensePage = () => <div>This is an edit page!</div>;
const NotFoundPage = () => <div>404!</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpensifyDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
