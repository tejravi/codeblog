const { redirect } = require("next/dist/next-server/server/api-utils");

module.exports = {
  async redirect() {
    return [
      {
        source: "/:slug",
        destination: "/login",
        permanent: false,
      },
    ];
  },
};
