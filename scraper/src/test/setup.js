import chai from 'chai'
import assertArrays from 'chai-arrays'
import chaiAsPromised from 'chai-as-promised'

chai.should()
chai.use(assertArrays)
chai.use(chaiAsPromised)

export const expect = chai.expect
