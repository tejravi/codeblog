import React from "react";
import AddBlog from "../components/addBlog";
import Head from "../components/head";
import HomeNav from "../components/homeNavbar";
function Home() {
  return (
    <React.Fragment>
      <Head title={"Add Post"} />
      <HomeNav post="My Post" link="/tejas" />
      <AddBlog />
    </React.Fragment>
  );
}
export default Home;
