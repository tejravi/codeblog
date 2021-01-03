import React from "react";
import UserPost from "../components/post";
import Head from "../components/head";
import HomeNav from "../components/homeNavbar";
import db from "../utils/dbConnect";
function Home({ rows }) {
  return (
    <React.Fragment>
      <Head title={"Code Blog"} />
      <HomeNav post="My Post" link="/us" />
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
  const item = await db.result("select * from notes");
  return {
    props: { rows: item.rows },
  };
}
export default Home;
