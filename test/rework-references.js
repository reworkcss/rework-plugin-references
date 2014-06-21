var rework = require('rework')
  , references = require('../')
  , fs = require('fs')
  , assert = require('assert')
  , read = fs.readFileSync;

function fixture (name) {
  return read('test/fixtures/' + name + '.css', 'utf8').trim();
}

describe('.references()', function(){
  it('should substitute @<word> with property values', function(){
    rework(fixture('references'))
      .use(references())
      .toString()
      .should.equal(fixture('references.out'));
  })
})
