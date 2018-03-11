export default ({ writeDataController }) => ({
  get: {},
  post: {
    '/scrapedData': writeDataController
  }
})
