const siteMetadata = {
  title: 'Make with ❤️ By Dev-scott ',
  author: 'Sado Scott',
  headerTitle: 'Dev.Scott',
  description: 'Freelance Developer ',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://dev-scott.org',
  siteRepo: 'https://github.com/dev-scott/BlogPortfolio',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/me.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'sadoscott25@gmail.com',
  github: 'https://github.com/dev-scott',
  twitter: 'https://twitter.com/dev__scott',
  // facebook: 'https://facebook.com/dlarroder',
  linkedin: 'https://www.linkedin.com/in/sado-scott-950579229/',

  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
