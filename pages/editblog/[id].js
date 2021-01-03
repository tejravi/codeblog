import React from "react";
import EditBlog from "../../components/edit";
import Head from "../../components/head";
import HomeNav from "../../components/homeNavbar";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <React.Fragment>
      <Head title={"Add Post"} />
      <HomeNav post="My Post" link="/tejas" />
      <EditBlog id={id} />
    </React.Fragment>
  );
}

export default Home;
