import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Membership from "./../components/Membership/Membership";

const MembershipPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Membership />
    </Fragment>
  );
};

export default MembershipPage;
