import db from "../../utils/dbConnect";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      let { userName, password } = req.body;
      const result = await db.result(
        "SELECT * FROM USERS WHERE USERNAME=$1 AND PASSWORD = $2",
        [userName, password]
      );
      result.rowCount === 1
        ? res.status(200).json({ user: true })
        : res.status(404).json({ user: false });
    } catch (err) {
      res.status(400).json({ user: err });
    }
  } else {
    res.redirect("/");
  }
};
