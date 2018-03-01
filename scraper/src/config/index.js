const devFile = 'dev.config'
const prodFile = 'prod.config'
const configOptions = {
  'production': devFile,
  'development': prodFile
}
const env = process.env.NODE_ENV
const confFile = configOptions[env] || devFile
const config = require(`./${confFile}`)

export const dbConfig = config.db
export const scraperConfig = config.scraper
