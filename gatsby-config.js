console.log("BUILD ON: " + process.env.NODE_ENV);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Better Animals Plus Official Site`,
    description: `Better Animals Plus - Breathing new life into your worlds`,
    author: `itsmeow`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `./src/data/backgrounds`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `devlogos`,
        path: `./src/data/devlogos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-meta-redirect`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-141623735-3`,
        head: true,
        anonymize: false,
      },
    },
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `betteranimalsplus.com`,
        short_name: `betteranimalsplus.com`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#121212`,
        display: `standalone`,
        icon: `src/data/icon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
  ],
};
