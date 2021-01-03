import db from "../../utils/dbConnect";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const name = await db.query("SELECT NAME FROM USERS WHERE USERNAME=$1", [
        req.cookies.user,
      ]);
      let { title, date, description } = req.body;
      await db.query(
        "INSERT INTO NOTES(name,username,title,date,data,likes,dislikes) VALUES($1,$2,$3,$4,$5,$6,$7)",
        [name[0].name, req.cookies.user, title, date, description, 0, 0]
      );
      res.status(200).json({ addBlog: true, user: req.cookies.user });
    } catch (err) {
      res.status(200).json({ addBlog: false });
    }
  } else {
    res.redirect("/");
  }
};
