const devFile = 'dev.config'
const prodFile = 'prod.config'
const configOptions = {
  'production': prodFile,
  'development': devFile
}
const env = process.env.NODE_ENV
const confFile = configOptions[env] || devFile
const config = require(`./${confFile}`).default

export const dbConfig = config.db
export const scraperConfig = config.scraper
