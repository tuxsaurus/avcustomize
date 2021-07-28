//const withReactSvg = require("next-react-svg");
//const path = require("path");

module.exports = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/shop/item",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};
