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
    it('encode should return a code 128 encoded sequence in ascii chars using mapping 0', function () {
      var encoder= new Encoder()
      assert(encoder.encode("Test") === "ÌTestWÎ")
    })
    it('encode should return a code 128 encoded sequence in ascii chars using mapping 2', function () {
      var encoder= new Encoder()
      assert(encoder.encode("Test",{mapping:2}) === "ÑTestWÓ")
    })
    it('encode should return a code 128 encoded sequence in ascii chars using mapping 0 and function character', function () {
      var encoder= new Encoder()
      assert(encoder.encode("Ê42012345") === "ÌÊÇJ!7MÃÎ")
    })
    it('encode should return a code 128 encoded sequence in ascii chars using mapping 2 and function character', function () {
      var encoder= new Encoder()
      assert(encoder.encode("Ï42012345",{mapping:2}) === "ÑÏÌJ!7MÈÓ")
    })
    it('encode should return a code 128 code c encoded sequence in ascii chars using mapping 0', function () {
      var encoder= new Encoder()
      assert(encoder.encode("9596979899") === "ÍÃÄÅÆÇ9Î")
    })
    it('encode should return a code 128 code c encoded sequence in ascii chars using mapping 2', function () {
      var encoder= new Encoder()
      assert(encoder.encode("9596979899",{mapping:2}) === "ÒÈÉÊËÌ9Ó")
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
