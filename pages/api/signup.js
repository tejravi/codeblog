import db from "../../utils/dbConnect";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      let { name, userName, password } = req.body;
      await db.query(
        "INSERT INTO USERS(name,username,password) VALUES($1,$2,$3)",
        [name, userName, password]
      );
      res.status(200).json({ addUser: true });
    } catch (err) {
      console.log(err);
      res.status(200).json({ addUser: false });
    }
  } else {
    res.redirect("/");
  }
};
