var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var POKECONSTANTS = require('../constants/pokemonConstants');


var _pokemon = {};
var PokemonStore = new Store(Dispatcher);


PokemonStore.all = function () {
  return Object.keys(_pokemon).map(function(pokemonId){
    return _pokemon[pokemonId];
  });
};

PokemonStore.resetPokemons = function(pokemon) {
  _pokemon = {};
  for (var i = 0; i < pokemon.length; i++) {
    var mon = pokemon[i];
    _pokemon[mon.id] = mon;
  }
  this.__emitChange();

};

PokemonStore.add = function(pokemon) {
  _pokemon[pokemon.id] = pokemon;
  this.__emitChange();
};

PokemonStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case POKECONSTANTS.ALL_POKEMON_RECEIVED:
      this.resetPokemons(payload.pokemon);
    break;
    case POKECONSTANTS.POKEMON_RECEIVED:

    this.add(payload.pokemon);
  }
};

PokemonStore.find = function (id) {
  return _pokemon[id];
};

// PokemonStore.findToy = function(params) {
//   var toys = _pokemon[params.pokemonId].toys;
//   debugger;
//   for (var i = 0; i < toys.length; i++) {
//     if (toys[i].id === params.toyId) return toys[i] ;
//   }
// };

module.exports = PokemonStore;
