const _ = require("lodash");

var Customer = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.myRecords = [];

  this.buyFromStore = function(record, store){
    if(cash > record.price){
      this.myRecords.push(record);
      _.pull(store.inventory, record);
    }
  };

  this.sellToStore = function(record, store){
    _.pull(this.myRecords, record);
    store.inventory.push(record);
  };

}

Customer.prototype.joinInString = function(){

}

module.exports = Customer;
