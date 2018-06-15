import React from "react";
import { Link } from "react-router-dom";

export default ({ description, amount, createdAt, id }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>{description}</Link>
    </h3>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);
