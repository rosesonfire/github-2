import { describe, before, beforeEach, afterEach, it } from './../setup'
// unit
import saveData from './../../main/services/saveData'
// mocks
import axiosWrapperMock from './../mocks/lib/wrappers/axiosWrapper'

describe('SaveData', () => {
  let
    mocks,
    axios,
    url,
    data,
    reply

  before(() => {
    url = 'https://github.com/timeline'
    data = {
      data: { someKey: 'someValue' }
    }
    reply = { reply: 'OK' }
  })

  afterEach(() => mocks.forEach(mock => mock.verify()))

  describe('When saving data', () => {
    beforeEach(() => {
      axios = axiosWrapperMock()
      mocks = [ axios.postWithPolling ]
      axios.postWithPolling.once().withExactArgs(url, data)
        .returns(Promise.resolve(reply))
    })

    it('should return a promise', () =>
      saveData({ http: axios, url })(data.data).should.be.a('promise'))

    it('should save data', () =>
      saveData({ http: axios, url })(data.data).should.eventually.equal(reply))
  })
})
