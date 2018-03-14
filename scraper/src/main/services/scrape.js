// Extracts only the required data set
const extract = ({ jsonData, baseUrl }) => {
  const requiredData = jsonData.feed.entry.map(feedEntry => {
    const author = feedEntry.author[0]
    return {
      updateTime: new Date(Date.parse(feedEntry.updated[0])),
      event: feedEntry.id[0].split(':')[2].split('/')[0],
      author: {
        name: author.name[0],
        uri: author.uri[0].replace(baseUrl, '')
      }
    }
  })
  return requiredData
}

// ETL's required data from endpoint to persistence
export default ({ url, getBaseUrl, fetchData, convertXMLToJSON, saveData }) =>
  async () => {
    const { data } = await fetchData(url)
    const jsonData = await convertXMLToJSON(data)
    const baseUrl = await getBaseUrl(url)
    const requiredDataSet = extract({ jsonData, baseUrl })

    return saveData(requiredDataSet)
  }
