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
    customer1 = new Customer("Chris", 5);
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

  it("Get Customer's Inventory size.", function() {
    customer.addRecordToCustomer(record3);
    assert.strictEqual(customer.myRecords.length, 1);
  });

  it("Customer can buy and sell records", function() {
    //customer can buy
    customer.buyFromStore(record1, store);
    assert.strictEqual(customer.myRecords.length, 1);
    assert.strictEqual(store.inventory.length, 1);
    //customer can sell
    customer.sellToStore(record1, store);
    assert.strictEqual(store.inventory.length, 2);
  });

  it("Customer should have cash that increase and decreases with buying and selling.", function() {
    //customers cash decrease when buying a record
    customer.buyFromStore(record1, store);
    assert.strictEqual(customer.cash, 17);
    //customers cash increase when selling a record
    customer.sellToStore(record1, store);
    customer.sellToStore(record2, store);
    assert.strictEqual(customer.cash, 45);
  });

  it("Customer shouldn't be able to buy a Record if he can't afford it.", function() {
    assert.strictEqual(customer1.buyFromStore(record1, store), "Not enough cash to buy a record");
  });

  it("Customer should be able to view the total value of their collection.", function() {
    customer.buyFromStore(record1, store);
    customer.addRecordToCustomer(record3);
    assert.strictEqual(customer.customerTotal(), 23);
  });

  it("Customer should be able to view the total value of all records of a given Genre.", function() {
    customer.buyFromStore(record1, store);
    customer.addRecordToCustomer(record2);
    customer.addRecordToCustomer(record3);
    assert.strictEqual(customer.myRecords.length, 3);
    assert.deepStrictEqual(customer.customerRecordsByGenre("Rock"), 25);
  });

  it("Customer should be able to view their most valuable record.", function() {
    customer.buyFromStore(record1, store);
    customer.addRecordToCustomer(record2);
    customer.addRecordToCustomer(record3);
    assert.strictEqual(customer.valuableRecord(), record2);
  });

  it("Customer should be able to sort their records by value. (ascending or descending).", function() {
    customer.buyFromStore(record1, store);
    customer.addRecordToCustomer(record2);
    customer.addRecordToCustomer(record3);
    //ascending
    assert.deepStrictEqual(customer.sort("price", "asc"), [record3, record1, record2]);
    //descending
    assert.deepStrictEqual(customer.sort("price", "desc"), [record2, record1, record3]);
  });

  xit("Customer should be able to compare the value of their collection with another customer.", function() {
    assert.strictEqual(store.inventory.length, 2);
  });


});
