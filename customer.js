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

Customer.prototype.customerRecordsByGenre = function(genre){
  var filteredRecords = [];
  var total_price_by_genre = 0;
  filteredRecords = _.filter(this.myRecords, {genre: genre});
  total_price_by_genre = _.sumBy(filteredRecords, 'price');
  return total_price_by_genre;
}

Customer.prototype.valuableRecord = function(){
  return _.maxBy(this.myRecords, "price");
}

Customer.prototype.sort = function(property, orderType){
  return _.orderBy(this.myRecords, [property], [orderType]);
}

Customer.prototype.compare = function(customer1, customer2){
  if(customer1.customerTotal() > customer2.customerTotal()){
    return customer1.name + " has more in the record collection than " + customer2.name;
  }else{
    return customer2.name + " has more in the record collection than " + customer1.name;
  }
}

module.exports = Customer;
