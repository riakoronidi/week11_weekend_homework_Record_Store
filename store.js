const _ = require("lodash");

var Store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

Store.prototype.addRecord = function(record){
  this.inventory.push(record);
}

Store.prototype.inventoryList = function(){
  var inventoryDetails = [];
  this.inventory.forEach(function(element){
    inventoryDetails.push(element.join());
  });
  return inventoryDetails;
};

Store.prototype.sell = function(){
  //check if inventory is empty
  if(this.inventory !== []){
    //if not, remove one record
    var firstRecord = this.inventory.shift();
    //substact that records price from balance
    this.balance += firstRecord.price;
  }
}

Store.prototype.totalOfInventory = function(){
  var total_record_price = 0;
  // this.inventory.forEach(function(element) {
  //   total_record_price += element.price;
  // });
  //refactored the store's inventory total
  total_record_price = _.sumBy(this.inventory, 'price');

  return "Balance is " + this.balance + " and value of inventory is " + total_record_price + ".";
}

Store.prototype.RecordsByGenre = function(genre){
  return _.filter(this.inventory, {genre: genre});
}


module.exports = Store;
