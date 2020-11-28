const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://kookoublog.netlify.app',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://kookoublog.netlify.app/',
    title:
      "<a href='https://kookoublog.netlify.app/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/kookou',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'twitter'}/>
		      </div>
		    </a>
      </li>
      <li>
		    <a href="https://github.com/kookou" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://storage.googleapis.com/graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/github-icon.svg' alt={'github'}/>
		      </div>
		    </a>
      </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'kookou only', link: 'http://localhost:8000' }],
    frontline: false,
    ignoreIndex: true,
    title:
    // "<a href='http://localhost:8000'>kookou only</a>",
    "",
  },
  siteMetadata: {
    title: "kookou's blog",
    description: '개린이 우당탕 블로그 작성기',
    ogImage: null,
    docsLocation: 'https://github.com/kookou/kookoublog/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;