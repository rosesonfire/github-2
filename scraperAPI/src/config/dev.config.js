export default {
  scraperApi: {
    port: 8080,
    requestBuffer: {
      bufferLimit: 10,
      ttl: 20000
    }
  },
  db: {
    host: 'localhost',
    port: 6379
  }
}
