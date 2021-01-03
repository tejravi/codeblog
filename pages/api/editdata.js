import db from "../../utils/dbConnect";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      let { id, title, description } = req.body;
      await db.query("UPDATE  NOTES SET TITLE=$1 ,DATA=$2 WHERE ID=$3", [
        title,
        description,
        id,
      ]);
      res.status(200).json({ addBlog: true, user: req.cookies.user });
    } catch (err) {
      res.status(200).json({ addBlog: false });
    }
  } else {
    res.redirect("/");
  }
};
