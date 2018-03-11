export default {
  scraperApi: {
    port: 80,
    requestBuffer: {
      bufferLimit: process.env.SCRAPER_API_REQUEST_BUFFER_LIMIT,
      ttl: process.env.SCRAPER_API_REQUEST_BUFFER_TTL
    }
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
}