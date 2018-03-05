import { dependencies } from './../ioc'

// Start scrapping
const scrape = async () => {
  const scraper = await dependencies.scraper
  const redisClient = await dependencies.redisClient

  await scraper()
  await redisClient.quit()
}

scrape().catch(e => {
  // eslint-disable-next-line no-console
  console.error(e)
})
