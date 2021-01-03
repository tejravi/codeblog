import SignUpPage from "../components/signup";
import Navbar from "../components/navbar";
import React from "react";
import Head from "../components/head";
function SignUp() {
  return (
    <React.Fragment>
      <Head title="SignUp" />
      <Navbar />
      <SignUpPage />
    </React.Fragment>
  );
}

export default SignUp;
