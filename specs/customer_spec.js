var assert = require('assert');
var Customer = require('../customer.js');
var Record = require('../record.js');
var Store = require('../store.js');
const _ = require("lodash");

describe('Customer', function() {
  var customer;
  var store;
  var record1;
  var record2;

  beforeEach(function(){
    customer = new Customer("Ria", 30);
    store = new Store("Ria", "Manchester");
    record1 = new Record("James", "Laid", "Alternative Rock", 13);
    record2 = new Record("The Beatles", "A Hard Day's Night", "Rock", 15);
    record3 = new Record("Scorpions", "Holiday", "Rock", 10);
    store.addRecord(record1);
    store.addRecord(record2);
  })


  it("customer has a name", function() {
    assert.strictEqual(customer.name, "Ria");
  });

  it("Get Store's Inventory size.", function() {
    assert.strictEqual(store.inventory.length, 2);
  });

  it("Customer can buy and sell records", function() {
    customer.buyFromStore(record1, store);
    assert.strictEqual(customer.myRecords.length, 1);
    assert.strictEqual(store.inventory.length, 1);

    customer.sellToStore(record1, store);
    assert.strictEqual(store.inventory.length, 2);
  });



});
