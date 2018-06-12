import React from "react";
import ReactDOM from "react-dom";

// Higher Order Component (HOC) - A component that renders another component
// HOC allow us:
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

const Info = props => (
  <div>
    <h2>Info</h2>
    <p>{props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.admin && <h4>This is a private data!</h4>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info); // this is a Higher Order Component (HOC)

const requireAutentication = WrappedComponent => {
  return props => (
    <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Authentication required!</p>}</div>
  );
};

const AuthInfo = requireAutentication(Info);

// ReactDOM.render(<AdminInfo admin={true} info="There are all details!" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are all details!" />, document.getElementById("app"));
