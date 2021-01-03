const pgp = require("pg-promise")({
  noWarnings: true,
});
const db = pgp(`postgres://postgres:12345@localhost:5432/login`);
export default db;
