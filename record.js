const _ = require("lodash");

var Record = function(artist_name, title, genre, price){
  this.artist_name = artist_name;
  this.title = title;
  this.genre = genre;
  this.price = price;
}


Record.prototype.join = function(){
  newArray = [];
  newArray.push(this.artist_name, this.title, this.genre, this.price);
  return _.join(newArray, ' ');
}

module.exports = Record;
