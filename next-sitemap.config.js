require('dotenv').config()

const config = loadConfig(process.cwd())
const allowRobots = config.robotsAllow

/** @link https://github.com/iamvishnusankar/next-sitemap */
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: config.canonicalBaseUrl,
  generateRobotsTxt: true,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      ...(!allowRobots ? [{ userAgent: '*', disallow: '/' }] : []),
      {
        userAgent: '*',
        disallow: [],
      },
      { userAgent: 'AhrefsSiteAudit', allow: '/' },
      { userAgent: 'AhrefsBot', allow: '/' },
      { userAgent: 'SiteAuditBot', allow: '/' },
    ]
  },
}