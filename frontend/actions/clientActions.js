var Dispatcher = require("../dispatcher/dispatcher");
var ApiUtil = require('../util/ApiUtil');

var ClientActions = {
  fetchAllPokemon: function(){
    ApiUtil.fetchAllPokemon();
  },

  fetchPokemon: function(id){

    ApiUtil.fetchPokemon(id);
  }
};

module.exports = ClientActions;
