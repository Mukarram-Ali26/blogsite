// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })


module.exports = {
  siteMetadata: {
    title: `Blog site`,
    description: `great Gatsby project.`,
    author: `@mukarramali`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `aag7bszen227`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `JbjR40Ug7kFKraxKS4Er--n94p0StWu4XxyIjanFZGY`,
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
