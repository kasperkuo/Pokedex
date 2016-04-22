var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var ClientActions = require('../../actions/clientActions');
var ToysIndex = require('../toys/ToysIndex');

var PokemonDetail = React.createClass({
  getStateFromStore: function(){
    var id = parseInt(this.props.params.pokemonId);
    return {pokemon: PokemonStore.find(id)};
  },

  getInitialState: function(){
    // ClientActions.fetchPokemon(this.props.params.pokemonId);
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function(nextProps) {
    ClientActions.fetchPokemon(nextProps.params.pokemonId);
  },

  componentDidMount: function() {
    this.listener = PokemonStore.addListener(this.updateStateFromStore);
    ClientActions.fetchPokemon(this.props.params.pokemonId);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  updateStateFromStore: function () {
    this.setState(this.getStateFromStore());
  },

  render: function() {
    if (this.state.pokemon){
      return (
        <div>
          <div className="pokemon-detail-pane">
            <div className="detail">
              <img src={this.state.pokemon.image_url}/>
              <div>Name: {this.state.pokemon.name}</div>
              <div>Attack: {this.state.pokemon.attack}</div>
              <div>Defense: {this.state.pokemon.defense}</div>
              <div>Type: {this.state.pokemon.poke_type}</div>
              <div>Moves: {this.state.pokemon.moves.join(", ")}</div>
            </div>
            <h1>Toys:</h1>
            <ToysIndex toys={this.state.pokemon.toys} />
          </div>
          {this.props.children}
        </div>

      );
    } else {
      return <div />;
    }
  }

});

module.exports = PokemonDetail;
