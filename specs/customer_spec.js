var assert = require('assert');
var Customer = require('../customer.js');
const _ = require("lodash");

describe('Customer', function() {
  var customer;

  beforeEach(function(){
    customer = new Customer("Ria");
  })


  it("customer has a name", function() {
    assert.strictEqual(customer.name, "Ria");
  });



});
