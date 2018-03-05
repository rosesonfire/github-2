import IoC from 'electrolyte'

IoC.use(IoC.dir('dist/ioc'))

export const dependencies = {
  scraper: IoC.create('services/scraper'),
  redisClient: IoC.create('lib/wrappers/redisClientWrapper')
}
