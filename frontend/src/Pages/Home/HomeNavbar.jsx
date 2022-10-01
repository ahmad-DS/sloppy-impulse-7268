import React from "react";
import { Link } from "react-router-dom";
import Signup from "../authentication/Signup";

const HomeNavbar = () => {
  return (
    <>
      <Link to="/signup">Signup</Link>
      <Link to="/login"> Login</Link>
    </>
  );
};

export default HomeNavbar;
