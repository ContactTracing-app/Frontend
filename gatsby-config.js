require('dotenv').config({
  path: `.env`
});

const config = require('./config');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    pathPrefix,
    title: config.siteTitle,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    logo: config.siteLogo,
    headline: config.siteHeadline,
    siteLanguage: config.siteLanguage,
    ogLanguage: config.ogLanguage,
    author: config.author,
    twitter: config.userTwitter,
    facebook: config.ogSiteName
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/config`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-theme-firebase',
      options: {
        credentials: {
          apiKey: process.env.GATSBY_API_KEY,
          authDomain: process.env.GATSBY_AUTH_DOMAIN,
          databaseURL: process.env.GATSBY_DATABASE_URL,
          projectId: process.env.GATSBY_PROJECT_ID,
          storageBucket: process.env.GATSBY_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_APP_ID,
          measurementId: process.env.GATSBY_MEASUREMENT_ID
        },
        loginPath: false,
        loginRedirectPath: '/app/contact',
        socialLogins: ['google', 'facebook']
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        access_token: process.env.ACCESS_TOKEN,
        instagram_id: process.env.BUSINESS_ID
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'src/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ]
};
