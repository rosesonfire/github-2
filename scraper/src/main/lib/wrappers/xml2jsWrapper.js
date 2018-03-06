import { createDefensivePromise } from '../../utils'

export default ({ xml2js }) => ({
  convert: xml => createDefensivePromise((resolve, reject) => {
    xml2js.parseString(xml, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
})
