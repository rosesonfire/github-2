// ETL's required data from endpoint to persistence
export default ({ odm }) => ({
  writeData: (dataList) => Promise.all(
    dataList.map(data => odm.create({ key: data.author.uri, data }).save()))
})
