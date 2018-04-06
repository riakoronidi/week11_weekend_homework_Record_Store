const _ = require("lodash");

var Customer = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.myRecords = [];

  this.buyFromStore = function(record, store){
    if(this.cash > record.price){
      this.myRecords.push(record);
      _.pull(store.inventory, record);
      this.cash -= record.price;
    }else{
      return "Not enough cash to buy a record";
    }
  };

  this.sellToStore = function(record, store){
    _.pull(this.myRecords, record);
    store.inventory.push(record);
    this.cash += record.price;
  };

}

Customer.prototype.addRecordToCustomer = function(record){
  this.myRecords.push(record);
}

Customer.prototype.customerTotal = function(){
  var total_my_record_price = 0;
  total_my_record_price = _.sumBy(this.myRecords, 'price');
  return total_my_record_price;
}

module.exports = Customer;
