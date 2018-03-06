import IoC from 'electrolyte'

IoC.use(IoC.dir('dist/ioc'))

export const dependencies = {
  scrape: IoC.create('services/scrape'),
  redisClient: IoC.create('lib/wrappers/redisClientWrapper')
}
