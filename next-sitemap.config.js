/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://mindora.no',
    generateRobotsTxt: true,
    exclude: [
      '/auth/login',
      '/auth/signup',
      '/dashboard',
      '/dashboard/*'
    ],
  }
  