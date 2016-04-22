var Dispatcher = require("../dispatcher/dispatcher");

var ServerActions = {
  receiveAllPokemon: function(pokemon){
    Dispatcher.dispatch({
      actionType: "ALL_POKEMON_RECEIVED",
      pokemon: pokemon
    });
  },

  receiveSinglePokemon: function(pokemon){

    Dispatcher.dispatch({
      actionType: "POKEMON_RECEIVED",
      pokemon: pokemon
    });
  }
};

module.exports = ServerActions;
