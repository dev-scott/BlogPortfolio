const siteMetadata = {
  title: 'Make with ❤️ By Dev-scott ',
  author: 'Sado Scott',
  headerTitle: 'dalelarroder',
  description: 'Software Developer at Aphex',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://dalelarroder.com',
  siteRepo: 'https://github.com/dlarroder/dalelarroder-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'sadoscott25@gmail.com',
  github: 'https://github.com/dev-scott',
  twitter: 'https://twitter.com/dalelarroder',
  facebook: 'https://facebook.com/dlarroder',
  linkedin: 'https://www.linkedin.com/in/dale-larroder/',

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
