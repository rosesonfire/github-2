import { dependencies } from './../ioc'

// Start scrapping
const scrape = async () => {
  const scraper = await dependencies.scraper

  await scraper()
}

scrape().catch(e => {
  // eslint-disable-next-line no-console
  console.error(e)
})
