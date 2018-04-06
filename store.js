const _ = require("lodash");

var Store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

Store.prototype.addRecord = function(record){
  this.inventory.push(record);
  this.balance += record.price;
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
    this.balance -= firstRecord.price;
  }
}

module.exports = Store;
