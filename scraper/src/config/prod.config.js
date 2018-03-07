export default {
  scraper: {
    endpoint: 'https://github.com/timeline'
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
}
