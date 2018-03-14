export default {
  scraper: {
    endpoint: 'https://github.com/timeline',
    fetchInterval: process.env.SCRAPER_FETCH_INTERVAL,
    maxPollTries: process.env.SCRAPER_MAX_POLL_TRIES, // must be greater than 0
    pollingInterval: process.env.SCRAPER_POLLING_INTERVAL
  },
  dataAPI: {
    host: process.env.DATA_API_HOST,
    port: process.env.DATA_API_PORT,
    path: process.env.DATA_API_PATH
  }
}
