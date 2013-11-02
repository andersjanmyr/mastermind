'use strict';

var expect = require('chai').expect;

var Model = require('../lib/model');

describe('Model', function() {
  var model;

  before(function() {
    model = new Model(['red', 'green', 'blue', 'blue']);
  });
  describe('addEntry', function() {
    it('a correct entry returns 4 black', function() {
      var result = model.addEntry(['red', 'green', 'blue', 'blue']);
      expect(result).to.deep.equal({black: 4, white: 0});
    });
  });
});

