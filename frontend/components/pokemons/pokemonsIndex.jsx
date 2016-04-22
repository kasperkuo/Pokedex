var React = require('react');
var PropTypes = React.PropTypes;
var PokemonStore = require('../../stores/pokemon');
var ClientActions = require('../../actions/clientActions');
var PokemonIndexItem = require('./pokemonIndexItem');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return {
      pokemon: []
    };
  },

  componentDidMount: function() {
    this.listener = PokemonStore.addListener(this._onChange);
    this.fetchAllPokemon();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function(e) {
    this.setState({ pokemon: PokemonStore.all() });
  },

  fetchAllPokemon: function() {
    ClientActions.fetchAllPokemon();
  },

  render: function() {
    return (
      <div>
        <ul>
          { this.state.pokemon.map(function(pokemon){
            return <PokemonIndexItem pokemon={pokemon} key={pokemon.id}/>;
          }) }
        </ul>
      </div>
    );
  }

});

module.exports = PokemonsIndex;
