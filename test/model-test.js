'use strict';

var expect = require('chai').expect;

var Model = require('../lib/model');

describe('Model', function() {
  var model;

  before(function() {
    model = new Model(['red', 'green', 'blue', 'blue']);
  });
  describe('addEntry', function() {
    it('with all correct returns 4 black', function() {
      var result = model.addEntry(['red', 'green', 'blue', 'blue']);
      expect(result).to.deep.equal({black: 4, white: 0});
    });
    it('with 2 correct returns 2 black', function() {
      var result = model.addEntry(['black', 'white', 'blue', 'blue']);
      expect(result).to.deep.equal({black: 2, white: 0});
    });
    it('with 1 correct and three wrong place returns 1 black and 3 white', function() {
      var result = model.addEntry(['blue', 'red', 'blue', 'green']);
      expect(result).to.deep.equal({black: 1, white: 3});
    });
    it('with 0 correct 0 black and 0 white', function() {
      var result = model.addEntry(['yellow', 'yellow', 'white', 'black']);
      expect(result).to.deep.equal({black: 0, white: 0});
    });
  });
});

