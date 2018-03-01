import IoC from 'electrolyte'

IoC.use(IoC.dir('dist/ioc'))

export const dependencies = {
  scrapper: IoC.create('lib/scrapper')
}
