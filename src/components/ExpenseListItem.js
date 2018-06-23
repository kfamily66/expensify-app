import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

export default ({ description, amount, createdAt, id }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>{description}</Link>
    </h3>
    <p>
      {numeral(amount / 100).format("$0,0.00")} - {moment(createdAt).format("DD MMM YYYY")}
    </p>
  </div>
);
