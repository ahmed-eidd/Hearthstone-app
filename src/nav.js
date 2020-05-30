import React from "react";
import { NavLink } from "react-router-dom";

function nav() {
  return <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/classes">Classes</NavLink>
  </div>;
}

export default nav;
