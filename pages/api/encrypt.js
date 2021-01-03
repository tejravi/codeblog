const crypto = require("crypto");
export default async (req, res) => {
  if (req.method === "POST") {
    try {
      let { password } = req.body;
      const secret = "tejas1798";
      const hash = crypto
        .createHmac("sha256", secret)
        .update(password)
        .digest("hex");
      res.status(200).json({ password: hash });
    } catch (err) {
      res.status(400).json({ user: err });
    }
  } else {
    res.redirect("/");
  }
};
