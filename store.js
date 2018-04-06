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



module.exports = Store;
