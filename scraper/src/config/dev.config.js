export default {
  scraper: {
    endpoint: 'https://github.com/timeline',
    fetchInterval: 5000,
    maxPollTries: 10,
    pollingInterval: 1000
  },
  dataAPI: {
    host: 'localhost',
    port: 8080,
    path: '/scrapedData'
  }
}
