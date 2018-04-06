var assert = require('assert');
var Store = require('../store.js');
var Record = require('../record.js');
const _ = require("lodash");

describe('Store', function() {
  var store;
  var record1;
  var record2;

  beforeEach(function(){
    store = new Store("Ria", "Manchester");
    record1 = new Record("James", "Laid", "Alternative Rock", 13);
    record2 = new Record("The Beatles", "A Hard Day's Night", "Rock", 15);
    record3 = new Record("Scorpions", "Holiday", "Rock", 10);
    store.addRecord(record1);
    store.addRecord(record2);
  })


  it("store has a name and a city", function() {
    assert.strictEqual(store.name, "Ria");
    assert.strictEqual(store.city, "Manchester");
  });

  it("Add some Records to the Store's Inventory.", function() {
    assert.strictEqual(store.inventory.length, 2);
  });


  it("Create a method that lists the inventory.", function() {
    assert.deepEqual(store.inventoryList(), ["James Laid Alternative Rock 13", "The Beatles A Hard Day's Night Rock 15"]);
  });

  it("Create a method so the Record Store can sell a Record and adjusts the Store's balance to account for the Record being sold.", function() {
    store.sell();
    assert.strictEqual(store.balance, 13);
  });

  it("Create a method that reports the financial situation of the Store, showing the balance and value of inventory.", function() {
    store.sell();
    assert.strictEqual(store.totalOfInventory(), "Balance is 13 and value of inventory is 15.");
  });

  it("Create a method that allows the store to view all Records of a given Genre.", function() {
    store.addRecord(record3);
    assert.deepStrictEqual(store.RecordsByGenre("Rock"), [record2, record3]);
  });







});
