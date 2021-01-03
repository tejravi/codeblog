import React from "react";
import UserPost from "../components/userpost";
import Head from "../components/head";
import HomeNav from "../components/homeNavbar";
import cookie from "cookie";
import db from "../utils/dbConnect";
function Home({ user, rows }) {
  return (
    <React.Fragment>
      <Head title={user + " -Code Blog"} />
      <HomeNav post="Public" link="public" />
      {rows.map(({ username, id, data, date, title }) => (
        <UserPost
          userName={username}
          date={date}
          title={title}
          data={data}
          id={id}
          key={id}
        />
      ))}
    </React.Fragment>
  );
}
export async function getServerSideProps(context) {
  if (!context.req.headers.cookie) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    const userName = cookie.parse(context.req.headers.cookie);
    if (userName.user === context.query.userName) {
      const results = await db.result("select * from notes where username=$1", [
        userName.user,
      ]);
      return {
        props: { user: userName.user, rows: results.rows }, // will be passed to the page component as props
      };
    } else {
      return {
        redirect: {
          destination: "/" + userName.user,
          permanent: false,
        },
      };
    }
  }
}
export default Home;
