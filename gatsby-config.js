module.exports = {
  siteMetadata: {
    title: 'Wisdom Curated',
    description: 'Answer the right questions'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-core',
      options: {
        root: __dirname
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-74643563-15'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!-- end -->',
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: []
            }
          }
        ]
      }
    }
  ]
};
