const install = require('../index')
const expect = require('chai').expect

describe('Install Module', () => {
    it('should export a function', () => {
        expect(install).to.be.a('function')
    })
    it('should return a promise', () => {
        expect(install()).to.be.a('promise')
    })
})
