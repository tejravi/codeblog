import LoginPage from "../components/login";
import Navbar from "../components/navbar";
import React from "react";
import Head from "../components/head";
function Login() {
  return (
    <React.Fragment>
      <Head title="Login" />
      <Navbar />
      <LoginPage />
    </React.Fragment>
  );
}

export default Login;
