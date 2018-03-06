import { dependencies } from './../ioc'

// Start scrapping
const scrape = async () => {
  const scrape = await dependencies.scrape
  const redisClient = await dependencies.redisClient

  await scrape()
  await redisClient.quit()
}

scrape().catch(e => {
  // eslint-disable-next-line no-console
  console.error(e)
})
