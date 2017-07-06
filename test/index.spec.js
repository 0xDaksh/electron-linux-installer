const install = require('../index')
const expect = require('chai').expect

describe('Install Module', function ()  {
    it('should export a function', () => {
        expect(install).to.be.a('function')
    })
    it('should return a promise', function()  {
        expect(install()).to.be.a('promise')
    })
})
