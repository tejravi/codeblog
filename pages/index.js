import React from "react";
import Post from "../components/post";
import Head from "../components/head";
import Navbar from "../components/navbar";
import db from "../utils/dbConnect";
export default function Home({ rows }) {
  return (
    <React.Fragment>
      <Head title="Code blog" />
      <Navbar />
      {rows.map(({ username, id, data, date, title }) => (
        <Post
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
