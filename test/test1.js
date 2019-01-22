var Encoder = require("../")
var assert = require('chai').assert
var should = require('chai').should()
describe('node128', function() {
    it('should be an object', function () {
      var encoder= new Encoder()
      assert(typeof encoder === "object")
    })
    it('should be have a method called encode', function () {
      var encoder= new Encoder()
      assert(encoder.hasOwnProperty("encode") === true)
    })
    it('encode should return a string', function () {
      var encoder= new Encoder()
      assert(typeof encoder.encode("test") === "string")
    })
    it('encode should return a code 128 encoded sequence in ascii chars', function () {
      var encoder= new Encoder()
      assert(encoder.encode("Test") === "ÌTestWÎ")
    })
    it('encode should return a code 128 encoded sequence in ascii chars', function () {
      var encoder= new Encoder()
      assert(encoder.encode("Test", {mapping:2}) == "ÑTestWÓ")
    })
    it('return all infos', function () {
      var encoder= new Encoder()
      assert(encoder.encode("Test",{output:"all"}).length === 7)
    })
    it('return all infos', function () {
      var encoder= new Encoder()
      var out=encoder.encode("ABC123456",{output:"all"})
      assert(out.length === 10)
    })
})
