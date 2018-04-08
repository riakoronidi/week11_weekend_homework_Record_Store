var assert = require('assert');
var Record = require('../record.js');
const _ = require("lodash");

describe('Record', function() {

  beforeEach(function(){
    record1 = new Record("James", "Laid", "Alternative Rock", 13);
  })


  it("record has an artist, title, genre and price", function() {
    assert.strictEqual(record1.artist_name, "James");
    assert.strictEqual(record1.title, "Laid");
    assert.strictEqual(record1.genre, "Alternative Rock");
    assert.strictEqual(record1.price, 13);
  });

  it("Create a method that prints out the Record's properties as a string.", function() {
    assert.strictEqual(record1.join(),"James Laid Alternative Rock 13" );
  });


});
