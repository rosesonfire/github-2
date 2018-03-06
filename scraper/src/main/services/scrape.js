// Extracts only the required data
const extract = ({ feed }, baseUrl) => {
  const requiredData = feed.entry.map(en => {
    const author = en.author[0]
    return {
      updateTime: new Date(Date.parse(en.updated[0])),
      event: en.id[0].split(':')[2].split('/')[0],
      author: {
        name: author.name[0],
        uri: author.uri[0].replace(baseUrl, '')
      }
    }
  })
  return requiredData
}

// ETL's required data from endpoint to persistence
export default ({ url, getBaseUrl, fetchData, convertXMLToJSON, odm }) =>
  async () => {
    const baseUrl = await getBaseUrl({ url })
    const { data } = await fetchData({ url })
    const jsonData = await convertXMLToJSON(data)
    const requiredData = extract(jsonData, baseUrl)

    return Promise.all(requiredData.map(reqData =>
      odm.create({ key: reqData.author.uri, data: reqData }).save()))
  }
