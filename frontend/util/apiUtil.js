var Dispatcher = require('../dispatcher/dispatcher');
var ServerActions = require('../actions/serverActions');

module.exports = {
  fetchAllPokemon: function(){
    $.ajax({
      url: "api/pokemon",
      success: function(pokemon){
        ServerActions.receiveAllPokemon(pokemon);
      }
    });
  },

  fetchPokemon: function(id){
    $.ajax({
      url: "api/pokemon/" + id,
      success: function(pokemon){
        ServerActions.receiveSinglePokemon(pokemon);
      }
    });
  }
};
