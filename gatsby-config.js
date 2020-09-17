module.exports = {
  siteMetadata: {
    title: `COVID-19 CountyTracker`,
    description: `Simple to review CMS published data by county for COVID-19.`,
    author: `ramsey.tisher@cerner.com`,
  },
  pathPrefix: `/CovidCountyTracker`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans", "Droid Serif"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `COVID-19 County Tracker`,
        short_name: `covidCountyTr`,
        start_url: `/CovidCountyTracker/`,
        background_color: `#f0f2f5`,
        theme_color: `#f0f2f5`,
        display: `standalone`,
        icon: `src/images/county-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-144985329-2",
      },
    },
  ],
}
