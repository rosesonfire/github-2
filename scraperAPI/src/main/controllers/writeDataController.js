export default ({ writeDataService }) => (req, res) =>
  res.setBufferedResponse(writeDataService.writeData(req.body.data))
