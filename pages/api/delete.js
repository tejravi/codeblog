import db from "../../utils/dbConnect";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      let { id } = req.body;
      const result = await db.result("DELETE FROM NOTES WHERE ID=$1", [id]);
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
