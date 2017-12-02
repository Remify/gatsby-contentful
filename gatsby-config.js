const lost = require(`lost`)

module.exports = {
  siteMetadata: {
    siteName: `Using Typescript Example`,
  },
  plugins: [
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `bl7vulgi9c7k`,
        accessToken: `05b0bbde3713af964667c197cc7773bb489f31e2e6ec192ef4191b320b654a3e`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [lost()],
      },
    },
  ],
}
