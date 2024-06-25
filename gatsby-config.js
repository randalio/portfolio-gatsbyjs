/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `randal.io`,
    description: `As a skilled Full-Stack WordPress Developer, I specialize in creating dynamic, responsive, and user-friendly websites that seamlessly integrate design and functionality to enhance user experience and drive digital success.`,
    image: `src/images/rio_thumb.png`,
    author: `@gatsbyjs`,
    siteUrl: `https://randal.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://randal.io/wordpress/graphql`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rio_logo_dark.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
