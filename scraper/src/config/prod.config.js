export default {
  scraper: {
    endpoint: 'https://github.com/timeline',
    fetchInterval: process.env.SCRAPER_FETCH_INTERVAL
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
}
